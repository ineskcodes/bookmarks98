import { root, main, header, footer } from './elements';

class SettingsPopup {
	constructor() {
		this.container = document.querySelector('.settings');
		this.popup = this.container.querySelector('.popup');
		this.openButton = this.container.querySelector('#settings-open-btn');
		this.closeButton = this.container.querySelector('#settings-close-btn');
		this.cancelButton = this.container.querySelector('#settings-cancel-btn');
		this.applyButton = this.container.querySelector('#settings-apply-btn');
		this.form = this.container.querySelector('form');
		this.previewBox = this.popup.querySelector('#wallpaper-preview');
		this.wallpaperInputs = Array.from(
			this.popup.querySelectorAll('input[name="wallpaper"]')
		);
		this.displaySelect = this.popup.querySelector('#display-select');
		this.closers = [this.closeButton, this.cancelButton];
		this.inerts = [main, header, footer, this.openButton];
		this.init();
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
		this.wallpaperInputs.forEach((input) =>
			input.addEventListener('input', (e) => {
				this.setWallpaper(e, this.previewBox);
				this.scrollToInput(e);
			})
		);

		this.displaySelect.addEventListener('input', (e) =>
			this.setDisplayMode(e, this.previewBox)
		);
		this.applyButton.addEventListener('click', (e) => this.applySettings(e));
		this.form.addEventListener('submit', (e) => this.handleSubmit(e));
	}

	openPopup() {
		this.popup.hidden = false;
		this.openButton.setAttribute('aria-expanded', 'true');
		this.popup.focus();
		this.inerts.forEach((el) => el.setAttribute('inert', ''));
	}

	closePopup() {
		this.popup.hidden = true;
		this.openButton.setAttribute('aria-expanded', 'false');
		this.openButton.focus();
		this.inerts.forEach((el) => el.removeAttribute('inert'));
	}

	scrollToInput(e) {
		e.currentTarget.parentElement.scrollIntoView({ block: 'center' });
	}

	setWallpaper(e, el, value) {
		const wallpaper = e ? e.currentTarget.value : value;

		if (wallpaper !== 'None') {
			el.style.setProperty('--wallpaper', `url("../${wallpaper}.png")`);
		}
	}

	setDisplayMode(e, el, value) {
		const displayMode = e ? e.currentTarget.value : value;

		switch (displayMode) {
			case 'center':
				el.style.setProperty(`--size`, 'auto');
				el.style.setProperty('--repeat', 'no-repeat');
				el.style.setProperty('--position', 'center');
				break;

			case 'tile':
				el.style.setProperty(`--size`, '20px 20px');
				el.style.setProperty('--repeat', 'repeat');
				el.style.setProperty('--position', 'auto');
				break;

			default:
				el.style.setProperty(`--size`, '100% 100%');
				el.style.setProperty('--repeat', 'no-repeat');
				el.style.setProperty('--position', 'auto');
				break;
		}
	}

	applySettings() {
		const displayMode = this.displaySelect.value;
		const wallpaper = this.wallpaperInputs.find((input) => input.checked).value;

		this.setWallpaper(null, root, wallpaper);
		this.setDisplayMode(null, root, displayMode);

		localStorage.setItem('wallpaper', wallpaper);
		localStorage.setItem('display', displayMode);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.applySettings();
		this.closePopup();
	}
}

new SettingsPopup();
