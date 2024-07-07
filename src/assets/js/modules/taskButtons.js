class TaskButtons {
	constructor() {
		this.windows = Array.from(document.querySelectorAll('.window'));
		this.taskButtons = Array.from(document.querySelectorAll('.task-button'));
		this.settingsTaskButton = document.querySelector('#settings-task-button');
		this.init();
	}

	async init() {
		this.taskButtons.forEach((btn) =>
			btn.addEventListener('click', this.handleClick.bind(this))
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
		const currentWindow = this.windows.find(
			(window) => window.dataset.task === currentTarget.id
		);

		if (!currentWindow) return;

		const isPressed =
			currentTarget.getAttribute('aria-pressed') === 'true' ? true : false;
		const isMinimized =
			currentWindow.dataset.minimized === 'true' ? true : false;

		if (isPressed === !isMinimized) {
			currentWindow.dispatchEvent(
				new CustomEvent('toggleminimize', {
					detail: {
						taskButton: currentTarget,
						windowEl: currentWindow,
						isPressed,
						isMinimized,
					},
				})
			);
		} else {
			currentWindow.dispatchEvent(new Event('mousedown'));
		}
	}

	toggleActiveState(e) {
		const windowEl = e.currentTarget;
		const taskButton = this.taskButtons.find(
			(button) => button.id === windowEl.dataset.task
		);

		if (taskButton) {
			this.taskButtons.forEach((button) =>
				button.setAttribute('aria-pressed', 'false')
			);

			taskButton.hidden = false;
			taskButton.setAttribute('aria-pressed', 'true');
		}
	}
}

if (document.querySelector('.task-button')) {
	new TaskButtons();
}

export default TaskButtons;
