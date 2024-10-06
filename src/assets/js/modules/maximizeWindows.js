import { getStateBoolean } from './utils';

class MaximizeWindows {
	constructor() {
		this.windows = Array.from(document.querySelectorAll('.window'));
		this.settingsWindow = document.querySelector('.window.popup');
		this.maximizeButtons = document.querySelectorAll('.maximize-btn');
		this.mainWindowHook = document.querySelector('#main-hook');
		this.settingsWindowHook = document.querySelector('#settings-hook');
		this.init();
	}

	init() {
		this.maximizeButtons.forEach((button) => {
			let listener = getStateBoolean(button, 'data-listener');

			if (!listener) {
				button.addEventListener(
					'click',
					this.handleMaximizeButtonClick.bind(this)
				);
				button.dataset.listener = 'true';
			}
		});

		this.windows.forEach((windowEl) =>
			windowEl.addEventListener('toggleminimize', (e) =>
				this.toggleIconsVisibility(e.currentTarget, true)
			)
		);

		document.documentElement.addEventListener(
			'settingstoggled',
			this.updateSettingsFullscreenState.bind(this)
		);
	}

	handleMaximizeButtonClick(e) {
		const maximizeButton = e.currentTarget;
		const windowEl = maximizeButton.closest('.window');
		const isPressed = !getStateBoolean(maximizeButton, 'aria-pressed');

		maximizeButton.setAttribute('aria-pressed', isPressed);

		windowEl.classList.toggle('fullscreen');
		windowEl.dispatchEvent(new Event('activewindow'));

		this.toggleIconsVisibility(windowEl);
	}

	toggleIconsVisibility(windowEl, event = false) {
		let isMinimized = getStateBoolean(windowEl, 'data-minimized');
		const isFullscreen = windowEl.classList.contains('fullscreen');
		const hook =
			windowEl === this.settingsWindow
				? this.settingsWindowHook
				: this.mainWindowHook;

		if (event) {
			isMinimized = !isMinimized;
		}

		if (isFullscreen && !isMinimized) {
			hook.classList.add('hide-icons');
		} else {
			hook.classList.remove('hide-icons');
		}
	}

	updateSettingsFullscreenState(e) {
		const { isOpen } = e.detail;
		const isFullscreen = this.settingsWindow.classList.contains('fullscreen');

		if (!isOpen && isFullscreen) {
			this.settingsWindowHook.classList.remove('hide-icons');
		}
	}
}

new MaximizeWindows();

export default MaximizeWindows;
