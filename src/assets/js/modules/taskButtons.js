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

		const isActive = currentTarget.dataset.active === 'true' ? true : false;
		const isMinimized =
			currentWindow.dataset.minimized === 'true' ? true : false;

		if (isActive === !isMinimized) {
			currentWindow.dispatchEvent(
				new CustomEvent('toggleminimize', {
					detail: {
						taskButton: currentTarget,
						windowEl: currentWindow,
						isActive,
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
				button.setAttribute('data-active', 'false')
			);

			taskButton.hidden = false;
			taskButton.setAttribute('data-active', 'true');
		}
	}
}

if (document.querySelector('.task-button')) {
	new TaskButtons();
}

export default TaskButtons;
