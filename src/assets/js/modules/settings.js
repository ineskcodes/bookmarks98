class SettingsPopup {
	constructor() {
		this.container = document.querySelector('.settings');
		this.popup = this.container.querySelector('.popup');
		this.openButton = this.container.querySelector('#settings-open-btn');
		this.closeButton = this.container.querySelector('#settings-close-btn');
		this.cancelButton = this.container.querySelector('#settings-cancel-btn');
		this.closers = [this.closeButton, this.cancelButton];
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
	}

	openPopup() {
		this.popup.hidden = false;
		this.openButton.setAttribute('aria-expanded', 'true');
		this.popup.focus();
	}

	closePopup() {
		this.popup.hidden = true;
		this.openButton.setAttribute('aria-expanded', 'false');
		this.openButton.focus();
	}
}

new SettingsPopup();
