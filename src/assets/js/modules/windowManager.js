import { getMaxZIndex } from './utils';

class WindowManager {
	constructor() {
		this.mainWindow = document.querySelector('.window.main');
		this.settingsWindow = document.querySelector('.popup.window');
		this.alertWindow = document.querySelector('.alert.window');
		this.windows = [this.mainWindow, this.settingsWindow, this.alertWindow];
		this.init();
	}

	init() {
		this.mainWindow.style.zIndex = getMaxZIndex(this.windows) + 1;
		this.windows.forEach((window) => {
			window &&
				window.addEventListener('mousedown', this.handleClick.bind(this));
		});
	}

	handleClick(e) {
		const { currentTarget } = e;
		currentTarget.style.zIndex = getMaxZIndex(this.windows) + 1;

		if (currentTarget === this.alertWindow) {
			currentTarget.parentElement.style.zIndex = getMaxZIndex(this.windows) + 1;
		}
	}
}

if (document.querySelector('.window')) {
	new WindowManager();
}

export default WindowManager;
