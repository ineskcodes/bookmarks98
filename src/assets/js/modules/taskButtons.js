class TaskButtons {
	constructor() {
		this.windows = Array.from(document.querySelectorAll('.window'));
		this.taskButtons = document.querySelectorAll('.task-button');
		this.init();
	}

	async init() {
		this.taskButtons.forEach((btn) => {
			btn.addEventListener('click', this.handleClick.bind(this));
		});
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
		}
	}
}

if (document.querySelector('.task-button')) {
	new TaskButtons();
}

export default TaskButtons;
