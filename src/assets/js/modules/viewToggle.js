class VieWToggle {
	constructor() {
		this.container = document.querySelector('.window__content');
		this.buttons = Array.from(
			this.container.querySelectorAll('button.view-toggle__btn')
		);
		this.init();
	}

	init() {
		this.buttons.forEach((btn) =>
			btn.addEventListener('click', this.handleClick.bind(this))
		);
	}

	handleClick(e) {
		const { currentTarget } = e;

		this.buttons.forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
		currentTarget.setAttribute('aria-pressed', 'true');

		this.container.dataset.view = currentTarget.dataset.view;
	}
}

new VieWToggle();

export default VieWToggle;
