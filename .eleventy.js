const { minify } = require('terser');
const htmlmin = require('html-minifier-terser');
const filenamify = require('./src/filters/filenamify.js');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/static/**': '/' });

	eleventyConfig.addFilter('filenamify', filenamify);

	eleventyConfig.addFilter('sortByTitle', (values) => {
		let vals = [...values];
		return vals.sort((a, b) => (a.data.title > b.data.title ? 1 : -1));
	});

	eleventyConfig.addNunjucksAsyncFilter(
		'jsmin',
		async function (code, callback) {
			try {
				const minified = await minify(code);
				callback(null, minified.code);
			} catch (err) {
				console.error('Terser error: ', err);
				// Fail gracefully.
				callback(null, code);
			}
		}
	);

	eleventyConfig.addTransform('htmlmin', function (content) {
		if ((this.page.outputPath || '').endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});

	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true,
	};
	const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs, {
		allowedAttributes: [],
	});

	eleventyConfig.setLibrary('md', markdownLib);

	return {
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',

		pathPrefix: '/bookmarks98',

		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
