import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook'],
	plugins: [
		new SwupHeadPlugin(),
		new SwupScriptsPlugin({ body: false }),
		new SwupA11yPlugin(),
	],
});

swup.hooks.on('page:view', async () => {
	try {
		const { default: Menu } = await import('./modules/menu.js');
		const { default: Bookmarks } = await import('./modules/bookmarks.js');
		const { default: WindowManager } = await import(
			'./modules/windowManager.js'
		);
		const { default: createDraggables } = await import(
			'./modules/dragAndDrop.createDraggables.js'
		);

		if (document.querySelector('.bookmarks')) {
			new Bookmarks();
		}

		if (createDraggables) {
			createDraggables();
		}

		new Menu();
		new WindowManager();

		console.log('Modules loaded successfully.');
	} catch (error) {
		console.error('Error loading modules:', error);
	}
});
