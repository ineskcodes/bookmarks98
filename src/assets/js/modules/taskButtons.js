import {
	getCorrespondingTaskButton,
	getCorrespondingWindow,
	getStateBoolean,
	removeOutlineFromTaskButton,
} from './utils';

class TaskButtons {
	constructor() {
		this.windows = Array.from(document.querySelectorAll('.window'));
		this.taskButtons = Array.from(document.querySelectorAll('.task-button'));
		this.settingsTaskButton = document.querySelector('#settings-task-button');
		this.init();
	}

	init() {
		this.bindEvents();
		this.taskButtons.forEach((button) => {
			const windowEl = getCorrespondingWindow(button);
			if (windowEl) button.hidden = windowEl.hidden;
		});
	}

	bindEvents() {
		this.taskButtons.forEach((btn) =>
			btn.addEventListener('click', this.handleClick.bind(this))
		);
		document.documentElement.addEventListener(
			'settingstoggled',
			this.toggleSettingsButtonVisibility.bind(this)
		);
		this.windows.forEach((windowEl) =>
			windowEl.addEventListener(
				'activewindow',
				this.toggleActiveState.bind(this)
			)
		);
	}

	handleClick(e) {
		const { currentTarget } = e;
		const isUsingMouse = e.pageX ? true : false;
		const currentWindow = getCorrespondingWindow(currentTarget);

		if (!currentWindow) return;

		const isPressed = getStateBoolean(currentTarget, 'aria-pressed');
		const isMinimized = getStateBoolean(currentWindow, 'data-minimized');

		removeOutlineFromTaskButton(currentTarget, isUsingMouse);

		if (isPressed !== isMinimized) {
			currentWindow.dispatchEvent(
				new CustomEvent('toggleminimize', {
					detail: { windowEl: currentWindow, isPressed },
				})
			);
		}

		if (!isPressed && !isMinimized) {
			currentWindow.dispatchEvent(new Event('mousedown'));
		}
	}

	toggleActiveState(e) {
		const windowEl = e.currentTarget;
		const taskButton = getCorrespondingTaskButton(windowEl);

		if (taskButton) {
			this.taskButtons.forEach((button) =>
				button.setAttribute('aria-pressed', 'false')
			);

			taskButton.hidden = false;
			taskButton.setAttribute('aria-pressed', 'true');
		}
	}

	toggleSettingsButtonVisibility(e) {
		const { isOpen } = e.detail;

		this.settingsTaskButton.hidden = !isOpen;
	}
}

if (document.querySelector('.task-button')) {
	new TaskButtons();
}

export default TaskButtons;
