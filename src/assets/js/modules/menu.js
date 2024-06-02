import { getMaxZIndex } from './utils';

class Menu {
	constructor() {
		this.taskbar = document.querySelector('.root__taskbar');
		this.toggle = document.querySelector('.menu__toggle');
		this.details = this.toggle.closest('details');
		this.details.addEventListener('toggle', this.toggleMenu.bind(this));
		this.isOpen = this.details.open;
		this.init();
	}

	init() {
		this.toggle.tabIndex = 0;
		this.toggle.setAttribute('role', 'button');
		this.toggle.setAttribute('aria-expanded', this.isOpen);
		this.toggle.setAttribute('aria-controls', 'menu-content');
		this.details.setAttribute('role', 'presentation');
	}

	toggleMenu(e) {
		const windows = Array.from(document.querySelectorAll('.window'));

		this.isOpen = e.newState === 'open' ? true : false;
		this.toggle.setAttribute('aria-expanded', this.isOpen);

		if (windows) {
			this.taskbar.style.zIndex = getMaxZIndex(windows) + 1;
		}
	}
}

if (document.querySelector('.menu')) {
	new Menu();
}

export default Menu;
