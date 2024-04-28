class Menu {
	constructor() {
		this.toggle = document.querySelector('.menu__toggle');
		this.details = this.toggle.closest('details');
		this.toggle.addEventListener('click', () => this.toggleMenu());
		this.init();
	}

	init() {
		this.toggle.tabIndex = 0;
		this.toggle.setAttribute('role', 'button');
		this.toggle.setAttribute('aria-expanded', 'false');
		this.toggle.setAttribute('aria-controls', 'menu-content');
		this.details.setAttribute('role', 'presentation');
	}

	toggleMenu() {
		const windows = Array.from(document.querySelectorAll('.window'));

		this.ariaExpanded =
			JSON.parse(this.toggle.getAttribute('aria-expanded')) | 'false';

		this.toggle.setAttribute('aria-expanded', !this.ariaExpanded);

		if (windows) {
			windows.forEach((window) => (window.style.zIndex = 0));
		}
	}
}

if (document.querySelector('.menu')) {
	new Menu();
}
