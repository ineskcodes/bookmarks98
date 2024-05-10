import { root, main, header, footer } from './elements';
import { wallpapers } from './wallpapers';

class SettingsPopup {
	constructor() {
		this.container = document.querySelector('.settings');
		this.popup = this.container.querySelector('.popup');
		this.openButton = this.container.querySelector('#settings-open-btn');
		this.closeButton = this.container.querySelector('#settings-close-btn');
		this.cancelButton = this.container.querySelector('#settings-cancel-btn');
		this.applyButton = this.container.querySelector('#settings-apply-btn');
		this.browseInput = this.container.querySelector('#browse-input');
		this.switcher = this.container.querySelector(
			'.switcher__wallpapers:not([data-placeholder])'
		);
		this.form = this.container.querySelector('form');
		this.previewBox = this.popup.querySelector('#wallpaper-preview');

		this.displaySelect = this.popup.querySelector('#display-select');
		this.closers = [this.closeButton, this.cancelButton];
		this.inerts = [main, header, footer, this.openButton];
		this.init();
		this.wallpapers = localStorage.getItem('wallpapers')
			? JSON.parse(localStorage.getItem('wallpapers'))
			: wallpapers.map((item) => {
					return {
						name: item.replaceAll(' ', '-').toLowerCase(),
						url: `../${item.replaceAll(' ', '-').toLowerCase()}.png`,
						enabled: false,
					};
				});
	}

	init() {
		this.openButton.setAttribute('aria-expanded', 'false');
		this.bindEvents();
	}

	bindEvents() {
		this.openButton.addEventListener('click', () => this.openPopup());
		this.closers.forEach((closerEl) =>
			closerEl.addEventListener('click', () => this.closePopup())
		);

		this.displaySelect.addEventListener('input', (e) =>
			this.setDisplayMode(e, this.previewBox)
		);
		this.applyButton.addEventListener('click', (e) => this.applySettings(e));
		this.form.addEventListener('submit', (e) => this.handleSubmit(e));
		this.browseInput.addEventListener('input', (e) => this.handleUpload(e));
	}

	openPopup() {
		this.popup.hidden = false;
		this.openButton.setAttribute('aria-expanded', 'true');
		this.popup.focus();
		this.inerts.forEach((el) => el.setAttribute('inert', ''));

		this.wallpaperInputs = Array.from(
			this.switcher.querySelectorAll('input[name="wallpaper"]')
		);

		this.wallpaperInputs.forEach((input) =>
			input.addEventListener('input', (e) => this.handleWallpaperInput(e))
		);
	}

	closePopup() {
		this.popup.hidden = true;
		this.openButton.setAttribute('aria-expanded', 'false');
		this.openButton.focus();
		this.inerts.forEach((el) => el.removeAttribute('inert'));
	}

	scrollToInput(input) {
		input.parentElement.scrollIntoView({ block: 'center' });
		input.focus();
	}

	setWallpaper(el, url) {
		el.style.setProperty('--wallpaper', `url("${url}")`);
	}

	setDisplayMode(e, el, value) {
		const displayMode = e ? e.currentTarget.value : value;
		let previewSize =
			this.widthPercentage && this.heightPercentage
				? `${this.widthPercentage}% ${this.heightPercentage}%`
				: localStorage.getItem('previewSize');

		if (el === this.previewBox && displayMode !== 'stretch') {
			localStorage.setItem('previewSize', previewSize);
		}

		switch (displayMode) {
			case 'center':
				el.style.setProperty(`--size`, 'auto');
				el.style.setProperty('--preview-size', previewSize);
				el.style.setProperty('--repeat', 'no-repeat');
				el.style.setProperty('--position', 'center');
				break;

			case 'tile':
				el.style.setProperty(`--size`, 'auto');
				el.style.setProperty('--preview-size', previewSize);
				el.style.setProperty('--repeat', 'repeat');
				el.style.setProperty('--position', 'auto');
				break;

			default:
				el.style.setProperty(`--size`, '100% 100%');
				el.style.setProperty('--preview-size', '100% 100%');
				el.style.setProperty('--repeat', 'no-repeat');
				el.style.setProperty('--position', 'auto');
				break;
		}
	}

	applySettings() {
		const displayMode = this.displaySelect.value;
		const input = this.wallpaperInputs.find((input) => input.checked);

		this.wallpapers.forEach((item) => (item.enabled = false));
		const wallpaper = this.wallpapers.find((item) => {
			return item.name === input.value;
		});
		wallpaper.enabled = true;
		this.setWallpaper(
			root,
			wallpaper.custom ? wallpaper.base64 : wallpaper.url
		);
		this.setDisplayMode(null, root, displayMode);

		const switcherInnerHTML = {
			innerHTML: this.container.querySelector(
				'.switcher__wallpapers:not([data-placeholder])'
			).innerHTML,
		};

		localStorage.setItem('switcher', JSON.stringify(switcherInnerHTML));
		localStorage.setItem('wallpapers', JSON.stringify(this.wallpapers));
		localStorage.setItem('display', displayMode);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.applySettings();
		this.closePopup();
	}

	handleWallpaperInput(e) {
		const input = e.currentTarget;
		const wallpaper = this.wallpapers.find((item) => {
			return item.name === input.value;
		});
		const url = wallpaper.custom ? wallpaper.base64 : wallpaper.url;
		this.wallpaperInputs.forEach((input) => {
			input.removeAttribute('checked');
			input.classList.remove('applied');
		});

		input.setAttribute('checked', 'checked');
		input.classList.add('applied');

		this.scrollToInput(e.currentTarget);

		const img = document.createElement('img');
		img.src = wallpaper.custom
			? wallpaper.base64
			: `/bookmarks98/${wallpaper.name}.png`;
		const displayMode = this.displaySelect.value;

		img.onload = () => {
			const { naturalWidth, naturalHeight } = img;
			const rootWidth = root.offsetWidth;
			const rootHeight = root.offsetHeight;

			this.widthPercentage = Math.round((naturalWidth * 100) / rootWidth);
			this.heightPercentage = Math.round((naturalHeight * 100) / rootHeight);

			this.setWallpaper(this.previewBox, url);
			this.setDisplayMode(null, this.previewBox, displayMode);
		};
	}

	handleUpload(e) {
		const file = e.currentTarget.files[0];
		const fileName = file.name.replace(/.(jpg|png|jpeg)$/, '');
		const id = fileName.replaceAll(' ', '-').toLowerCase();
		const imgSrc = this.switcher.querySelector('img').src;
		const url = window.URL.createObjectURL(file);
		const size = file.size;
		const isDuplicate = !!this.wallpapers.find((item) => item.name === id);

		if (size > 1_048_576) {
			alert('File Size too big!');
			return;
		}

		if (isDuplicate) {
			alert(`${fileName} already exists!`);
			return;
		}

		const label = document.createElement('label');
		label.setAttribute('for', id);
		label.classList.add('wallpaper');

		const input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', 'wallpaper');
		input.id = id;
		input.value = id;

		input.setAttribute('checked', 'checked');
		input.classList.add('applied');

		const img = document.createElement('img');
		img.width = 16;
		img.height = 16;
		img.src = imgSrc;
		img.alt = '';

		const span = document.createElement('span');
		span.innerText = fileName;

		this.wallpaperInputs.push(input);

		label.append(input, img, span);
		this.switcher.append(label);

		const image = document.createElement('img');
		image.src = url;

		image.onload = (e) => {
			const image = e.currentTarget;
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			ctx.drawImage(image, 0, 0, image.width, image.height);
			const imageUrl = canvas.toDataURL('image/png');
			this.addWallpaper(id, url, imageUrl);
			input.addEventListener('input', (e) => this.handleWallpaperInput(e));
			input.dispatchEvent(new Event('input'));
		};
	}

	addWallpaper(wallpaperName, wallpaperUrl = null, imageUrl = null) {
		this.wallpapers.push({
			name: wallpaperName,
			url: wallpaperUrl,
			enabled: false,
			custom: true,
			base64: imageUrl,
		});
	}
}

new SettingsPopup();
