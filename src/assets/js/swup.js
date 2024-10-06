import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook', 'footer', '#main-hook'],
	linkToSelf: 'navigate',
	plugins: [
		new SwupHeadPlugin(),
		new SwupScriptsPlugin({ body: false }),
		new SwupA11yPlugin(),
	],
});

swup.hooks.on('page:view', async () => {
	const main = document.querySelector('.main');
	main.scrollIntoView({ block: 'start' });

	try {
		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);

		const { lazyLoadImages } = await import('./modules/lazyLoad.js');
		const { default: Menu } = await import('./modules/menu.js');
		const { default: Settings } = await import('./modules/settings.js');
		const { default: Bookmarks } = await import('./modules/bookmarks.js');
		const { default: ViewToggle } = await import('./modules/viewToggle.js');
		const { default: TaskButtons } = await import('./modules/taskButtons.js');
		const { default: MinimizeWindows } = await import(
			'./modules/minimizeWindows.js'
		);
		const { default: MaximizeWindows } = await import(
			'./modules/maximizeWindows.js'
		);
		const { default: WindowManager } = await import(
			'./modules/windowManager.js'
		);

		if (document.querySelector('.bookmarks')) {
			new Bookmarks();
		}

		if (vw >= 700) {
			import('./modules/dragAndDrop.createDraggables.js').then(
				(createDraggables) => {
					createDraggables.default();
				}
			);
		}

		new Menu();
		new Settings();
		new WindowManager();
		new TaskButtons();
		new MinimizeWindows();
		new MaximizeWindows();
		new ViewToggle();
		lazyLoadImages();

		console.log('Modules loaded successfully.');
	} catch (error) {
		console.error('Error loading modules:', error);
	}
});
