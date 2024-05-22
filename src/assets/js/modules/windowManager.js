import { getMaxZIndex } from './utils';

class WindowManager {
	constructor() {
		this.windows = document.querySelectorAll('.window');
		this.windows.forEach((window) => {
			window.addEventListener('click', this.handleClick.bind(this));
		});
	}

	handleClick(e) {
		const { currentTarget } = e;
		currentTarget.style.zIndex = getMaxZIndex(this.windows) + 1;
	}
}

if (document.querySelector('.window')) {
	new WindowManager();
}
