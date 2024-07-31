const fs = require('fs');
const fm = require('front-matter');
const puppeteer = require('puppeteer');
const FormData = require('form-data');
const fetch = require('node-fetch');
const unirest = require('unirest');

require('dotenv').config();

const AUTHORIZATION_KEY =
	'Basic ' +
	Buffer.from(process.env.IMAGEKIT_API_SECRET + ':').toString('base64');

const getBookmarksData = () => {
	try {
		const files = fs.readdirSync('src/bookmarks');
		const content = files.map((file) =>
			fs.readFileSync(`src/bookmarks/${file}`, 'utf-8')
		);
		const frontMatter = content.map(
			(fileContent) => fm(fileContent).attributes
		);
		const data = frontMatter
			.map((attributes) => {
				return { title: attributes.title, url: attributes.url };
			})
			.filter((attributes) => attributes.title && attributes.url);

		return data;
	} catch (error) {
		console.error('Error reading front matter:', error);
		return [];
	}
};

const filenamify = (str) => {
	str = str.replace(/^\s+|\s+$/g, '');
	str = str.toLowerCase();
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
	return str;
};

const checkIfFileExists = async (filename) => {
	return new Promise((resolve, reject) => {
		const req = unirest('GET', process.env.IMAGEKIT_FILES_ENDPOINT);

		req.query({
			path: '/bookmarks98',
			searchQuery: `name = "${filename}"`,
			fileType: 'image',
		});

		req.headers({
			Accept: 'application/json',
			Authorization: AUTHORIZATION_KEY,
		});

		req.end((res) => {
			if (res.error) {
				console.error('Error checking file existence:', filename, res.error);
				resolve(false);
			} else {
				resolve(Boolean(res.body.length));
			}
		});
	});
};

const captureScreenshot = async (filename, url) => {
	const tempPath = `./temp/${filename}.jpeg`;
	let fileExists = null;

	try {
		fileExists = await checkIfFileExists(filename);
	} catch (error) {
		console.error('❌ Error checking file existence:', filename);
	}

	if (fileExists) {
		console.log(`❕ ${filename} already exists on ImageKit!`);
		return;
	}

	try {
		const browser = await puppeteer.launch({ headless: 'new' });
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 800 });
		await page.goto(url, { waitUntil: 'networkidle2' });
		const screenshot = await page.screenshot({ path: tempPath, type: 'jpeg' });
		await browser.close();
		return screenshot;
	} catch (error) {
		console.error('❌ Error taking screenshot:', filename, error);
		return null;
	}
};

const uploadToImageKit = async (filename, file) => {
	const base64 = Buffer.from(file).toString('base64');
	const formData = new FormData();
	formData.append('fileName', filename);
	formData.append('file', base64);
	formData.append('folder', 'bookmarks98');
	formData.append('useUniqueFileName', 'false');

	const url = process.env.IMAGEKIT_UPLOAD_ENDPOINT;
	const options = {
		method: 'POST',
		headers: {
			Authorization: AUTHORIZATION_KEY,
			Accept: 'application/json',
		},
		body: formData,
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		if (data.url) {
			console.log(`🥳 ${filename} successfully uploaded to ImageKit!`);
		} else {
			console.error('❌ Upload failed:', data);
		}
	} catch (error) {
		console.error('❌ Error uploading file:', filename, error);
	}
};

const build = async () => {
	// create a temporary directory to store the screenshots
	if (!fs.existsSync('./temp')) {
		fs.mkdirSync('./temp');
	}

	const data = getBookmarksData();

	for (const { title, url } of data) {
		const filename = filenamify(title);

		await captureScreenshot(filename, url).then(async (screenshot) => {
			if (screenshot) {
				await uploadToImageKit(filename, screenshot);
			}
		});
	}

	// delete the temporary directory
	fs.rm('./temp', { recursive: true, force: true }, (err) => {
		if (err) console.error('Error deleting temp directory:', err);
	});

	console.log('🎉 Screenshots collection complete! 🎉');
};

build();
