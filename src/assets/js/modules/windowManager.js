import { getMaxZIndex } from './utils';

class WindowManager {
	constructor() {
		this.mainWindow = document.querySelector('.window.main');
		this.settingsWindow = document.querySelector('.popup.window');
		this.windows = [this.mainWindow, this.settingsWindow];
		this.init();
	}

	init() {
		this.mainWindow.style.zIndex = getMaxZIndex(this.windows) + 1;
		this.windows.forEach((window) => {
			window.addEventListener('mousedown', this.handleClick.bind(this));
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

export default WindowManager;
