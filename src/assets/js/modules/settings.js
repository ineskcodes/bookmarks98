import { root, main, header, footer } from './elements';
import { wallpapers } from './wallpapers';

class SettingsPopup {
	constructor() {
		this.setupElements();
		this.loadWallpapers();
		this.loadTheme();
		this.initPopup();
	}

	setupElements() {
		this.container = this.query('.settings');
		this.popup = this.query('.popup', this.container);
		this.alert = {
			container: this.query('.alert', this.container),
			firstFocusable: this.query('#alert-close-btn', this.container),
			closeButtons: this.query('.alert button', this.container, true),
			heading: this.query('.alert__heading', this.container),
			message: this.query('.alert__message', this.container),
			outer: this.query('#alert-outer', this.container),
		};
		this.form = this.query('form', this.container);
		this.switcher = this.query(
			'.switcher__wallpapers:not([data-placeholder])',
			this.form
		);
		this.buttons = {
			open: this.query('#settings-open-btn', this.container),
			apply: this.query('#settings-apply-btn', this.container),
			cancel: this.query('#settings-cancel-btn', this.container),
			close: this.query('#settings-close-btn', this.container),
		};
		this.previewBox = this.query('#wallpaper-preview', this.popup);
		this.displaySelect = this.query('#display-select', this.form);
		this.themeSelect = this.query('#theme-select', this.form);
		this.browseInput = this.query('#browse-input', this.popup);
		this.wallpaperLabels = this.switcher.children;
	}

	query(selector, parentEl = document, multiple = false) {
		return multiple
			? parentEl.querySelectorAll(selector)
			: parentEl.querySelector(selector);
	}

	loadWallpapers() {
		if (localStorage.getItem('wallpapers')) {
			this.wallpapers = JSON.parse(localStorage.getItem('wallpapers'));
		} else {
			this.wallpapers = wallpapers.map((wallpaper) => {
				return {
					name: this.formatName(wallpaper),
					src: this.generateUrl(wallpaper),
					isEnabled: false,
					isCustom: false,
				};
			});
		}

		this.selectedWallpaper = this.wallpapers.find(
			(wallpaper) => wallpaper.isEnabled
		);
	}

	loadTheme() {
		this.theme = document.documentElement.dataset.theme || 'default';
		this.tempTheme = this.theme;
	}

	formatName(wallpaper) {
		return wallpaper
			.replaceAll(' ', '-')
			.replace(/.(png|jpeg|jpg)$/, '')
			.toLowerCase();
	}

	generateUrl(wallpaper) {
		return `/bookmarks98/${this.formatName(wallpaper)}.png`;
	}

	initPopup() {
		this.buttons.open.setAttribute('aria-expanded', 'false');
		this.bindEvents();
	}

	bindEvents() {
		this.buttons.open.addEventListener('click', () => this.togglePopup(true));
		[this.buttons.close, this.buttons.cancel].forEach((button) =>
			button.addEventListener('click', this.cancelSettings.bind(this))
		);
		this.handleWallpaperInput.bind(this);
		this.form.addEventListener('submit', this.handleSubmit.bind(this));
		this.buttons.apply.addEventListener('click', this.applySettings.bind(this));
		this.displaySelect.addEventListener(
			'input',
			this.updateDisplayMode.bind(this)
		);
		this.browseInput.addEventListener('input', this.handleUpload.bind(this));
		this.themeSelect.addEventListener('input', this.previewTheme.bind(this));
		this.alert.closeButtons.forEach((button) => {
			button.addEventListener('click', this.hideAlert.bind(this));
		});
		this.alert.outer.addEventListener(
			'click',
			this.handleClickOutsideAlert.bind(this)
		);
	}

	togglePopup(isOpen) {
		const inerts = [main, header, footer, this.buttons.open];
		const elementToFocusOn = isOpen ? this.popup : this.buttons.open;

		this.buttons.open.setAttribute('aria-expanded', `${isOpen}`);
		this.popup.hidden = !isOpen;
		inerts.forEach((el) => this.toggleInertState(isOpen, el));
		elementToFocusOn.focus();
		this.loadWallpaperInputs(isOpen);
	}

	cancelSettings() {
		this.setTheme(true);
		this.togglePopup(false);
	}

	toggleInertState(isInert, element) {
		const focusablesInsideElements = element.querySelectorAll(
			'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
		);

		element.setAttribute('aria-hidden', `${isInert}`);
		focusablesInsideElements.forEach(
			(focusableEl) => (focusableEl.tabIndex = Number(isInert))
		);
		element.inert = isInert;
	}

	loadWallpaperInputs(addListeners) {
		this.wallpaperInputs = [...this.wallpaperLabels].map(
			(label) => label.firstElementChild
		);
		if (addListeners) {
			this.wallpaperInputs.forEach((input) =>
				input.addEventListener('input', (e) => this.handleWallpaperInput(e))
			);
		} else {
			this.wallpaperInputs.forEach((input) =>
				input.removeEventListener('input', (e) => this.handleWallpaperInput(e))
			);
		}
	}

	handleWallpaperInput(e) {
		const { target } = e;

		if (target.type === 'radio') {
			this.updatePreview(target.value);
			this.displaySelect.dispatchEvent(new Event('input'));
		}
	}

	updatePreview(wallpaperName) {
		this.setWallpaper(this.previewBox, wallpaperName);
	}

	setWallpaper(element, wallpaperName) {
		this.selectedWallpaper = this.wallpapers.find(
			(wallpaper) => wallpaper.name === wallpaperName
		);

		if (this.selectedWallpaper) {
			const { src } = this.selectedWallpaper;
			element.style.setProperty('--wallpaper', `url("${src}")`);
		} else {
			element.style.setProperty('--wallpaper', 'none');
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.applySettings();
		this.togglePopup(false);
	}

	saveSettings() {
		this.setLocalStorageItem('wallpapers', this.wallpapers);
		this.setLocalStorageItem('display-mode', this.displayMode);
		this.setLocalStorageItem('preview-ratio', this.previewRatio);
		this.setLocalStorageItem('switcher', this.switcher.innerHTML);
		this.setLocalStorageItem('theme', this.theme);
	}

	setLocalStorageItem(key, value) {
		if (!value) {
			return;
		}

		value = typeof value === 'object' ? JSON.stringify(value) : value;

		try {
			localStorage.setItem(key, value);
		} catch (e) {
			if (e.name === 'QuotaExceededError') {
				console.error('Local storage is full. Please free up some space.');
			} else {
				throw e; // rethrow the error if it's not QuotaExceededError
			}
		}
	}

	applySettings() {
		const wallpaperInput = [...this.wallpaperInputs].find(
			(input) => input.checked
		);
		const wallpaperName = wallpaperInput.value;

		this.displayMode = this.displaySelect.value;
		this.setWallpaper(root, wallpaperName);
		this.setDisplayStyle(root, this.displayMode);
		this.setActiveWallpaper(wallpaperName);
		this.resetAppliedClass(wallpaperInput);
		this.setTheme(false);
		this.saveSettings();
	}

	resetAppliedClass(input = null) {
		[...this.wallpaperInputs].forEach((input) =>
			input.classList.remove('applied')
		);

		if (input) {
			input.classList.add('applied');
		}
	}

	updateDisplayMode(e) {
		this.displayMode = e.currentTarget.value;
		this.setDisplayStyle(this.previewBox, this.displayMode);
	}

	async setDisplayStyle(element, displayMode) {
		const styleMap = {
			center: { size: 'auto', repeat: 'no-repeat', position: 'center' },
			tile: { size: 'auto', repeat: 'repeat', position: 'auto' },
			stretch: { size: '100% 100%', repeat: 'no-repeat', position: 'auto' },
		};
		const selectedStyle = styleMap[displayMode];
		Object.entries(selectedStyle).forEach(([prop, value]) =>
			element.style.setProperty(`--${prop}`, value)
		);

		this.previewRatio =
			displayMode !== 'stretch' ? await this.getPreviewRatio() : '100% 100%';
		element.style.setProperty(`--preview-size`, this.previewRatio);
	}

	loadImage(src) {
		return new Promise((resolve, reject) => {
			const img = document.createElement('img');
			img.onload = () => resolve(img);
			img.onerror = reject;
			img.src = src;
		});
	}

	calculatePreviewRatio(img, rootWidth, rootHeight) {
		const { naturalHeight, naturalWidth } = img;
		const widthRatio = Math.round((naturalWidth * 100) / rootWidth);
		const heightRatio = Math.round((naturalHeight * 100) / rootHeight);
		img.remove();

		return `${widthRatio}% ${heightRatio}%`;
	}

	async getPreviewRatio() {
		const rootWidth = root.offsetWidth;
		const rootHeight = root.offsetHeight;

		if (this.selectedWallpaper) {
			try {
				const img = await this.loadImage(this.selectedWallpaper.src);
				return this.calculatePreviewRatio(img, rootWidth, rootHeight);
			} catch (error) {
				console.error('Failed to load image:', error);
			}
		}

		return '100% 100%';
	}

	async handleUpload(e) {
		const file = e.target.files[0];
		const fileName = this.formatName(file.name);
		const fileSize = file.size;

		if (!this.validateFile(fileSize, fileName)) {
			return;
		}

		try {
			const base64 = await this.readFile(file);
			this.addCustomWallpaper(file, base64);
		} catch (error) {
			console.error('Error reading file:', error);
		}
	}

	addCustomWallpaper(file, base64) {
		const newWallpaper = {
			name: this.formatName(file.name),
			src: base64,
			isEnabled: false,
			isCustom: true,
		};

		this.wallpapers.push(newWallpaper);
		this.setLocalStorageItem('wallpapers', this.wallpapers);
		this.updateSwitcher(newWallpaper);
	}

	readFile(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = (loadEvent) => {
				resolve(loadEvent.target.result);
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}

	setActiveWallpaper(wallpaperName) {
		this.selectedWallpaper = this.wallpapers.find(
			(wallpaper) => wallpaper.name === wallpaperName
		);

		this.wallpapers.forEach((wallpaper) => {
			wallpaper.isEnabled = wallpaper === this.selectedWallpaper;
		});
	}

	validateFile(size, name) {
		const isDuplicate = this.wallpapers.find((wallpaper) => {
			return wallpaper.name === name;
		});

		if (size > 1_048_576) {
			this.showAlert(
				'File Size Exceeds Limit',
				'The file size exceeds the limit of 1MB. Please upload a smaller file.'
			);
			return false;
		}

		if (isDuplicate) {
			this.showAlert(
				'Duplicate File Name',
				`A file named "${name}" has already been uploaded. Please upload a different file.`
			);
			return false;
		}

		return true;
	}

	showAlert(title, message) {
		const inerts = [main, header, footer, this.buttons.open, this.popup];
		this.alert.heading.innerText = title;
		this.alert.message.innerText = message;
		inerts.forEach((el) => this.toggleInertState(true, el));
		this.alert.outer.hidden = false;
		this.alert.container.focus();
	}

	hideAlert() {
		const inerts = [main, header, footer, this.buttons.open, this.popup];
		this.alert.outer.hidden = true;
		inerts.forEach((el) => this.toggleInertState(false, el));
		this.browseInput.focus();
	}

	handleClickOutsideAlert(e) {
		if (e.target === this.alert.outer) {
			this.hideAlert();
		}
	}

	updateSwitcher(wallpaper) {
		const label = document.createElement('label');
		label.classList.add('wallpaper');
		label.setAttribute('for', this.formatName(wallpaper.name));

		const input = document.createElement('input');
		input.type = 'radio';
		input.name = 'wallpaper';
		input.value = this.formatName(wallpaper.name);
		input.id = this.formatName(wallpaper.name);
		input.checked = true;

		const img = document.createElement('img');
		img.src = this.switcher.querySelector('img').src;

		const span = document.createElement('span');
		span.innerText = wallpaper.name;

		label.append(input, img, span);
		this.switcher.appendChild(label);

		input.focus();

		this.loadWallpaperInputs(true);
		input.dispatchEvent(new Event('input'));
		this.setLocalStorageItem('switcher', this.switcher.innerHTML);
	}

	previewTheme(e) {
		this.tempTheme = e.currentTarget.value;
		const previewImageSrc = `/bookmarks98/${this.tempTheme}.png`;
		root.style.setProperty('--theme-preview', `url("${previewImageSrc}")`);
	}

	setTheme(shouldRevert) {
		const selectedTheme = shouldRevert ? this.theme : this.tempTheme;
		const previewImageSrc = `/bookmarks98/${selectedTheme}.png`;
		root.style.setProperty('--theme-preview', `url("${previewImageSrc}")`);
		this.theme = selectedTheme;
		this.tempTheme = this.theme;
		this.themeSelect.value = this.theme;
		document.documentElement.dataset.theme = this.theme;
	}
}

new SettingsPopup();
