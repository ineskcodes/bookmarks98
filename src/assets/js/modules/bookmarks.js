class Bookmarks {
	constructor() {
		this.list = document.querySelector('.bookmarks');
		this.items = Array.from(this.list.querySelectorAll('.bookmark'));
		this.init();
	}

	init() {
		this.items.forEach((item) => {
			item.addEventListener('click', this.handleClick);
			item.setAttribute('data-clickable', '');
		});
	}

	handleClick(e) {
		const link = e.currentTarget.querySelector('a[href]');
		link.click();
	}
}

if (document.querySelector('.bookmarks')) {
	new Bookmarks();
}

export default Bookmarks;
