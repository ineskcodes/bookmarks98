import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook', 'footer'],
	plugins: [
		new SwupHeadPlugin(),
		new SwupScriptsPlugin({ body: false }),
		new SwupA11yPlugin(),
	],
});

swup.hooks.on('page:view', async () => {
	try {
		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
		const { default: Menu } = await import('./modules/menu.js');
		const { default: Bookmarks } = await import('./modules/bookmarks.js');
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
		new WindowManager();

		console.log('Modules loaded successfully.');
	} catch (error) {
		console.error('Error loading modules:', error);
	}
});
