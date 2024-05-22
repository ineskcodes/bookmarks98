import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook'],
	plugins: [new SwupHeadPlugin(), new SwupScriptsPlugin({ body: false })],
});

swup.hooks.on('page:view', async () => {
	try {
		const { default: Menu } = await import('./modules/menu.js');
		const { default: SettingsPopup } = await import('./modules/settings.js');
		const { default: Bookmarks } = await import('./modules/bookmarks.js');
		const { default: createDraggables } = await import(
			'./modules/dragAndDrop.createDraggables.js'
		);

		if (document.querySelector('.bookmarks')) {
			new Bookmarks();
		}

		if (createDraggables) {
			createDraggables();
		}

		new SettingsPopup();
		new Menu();

		console.log('Modules loaded successfully.');
	} catch (error) {
		console.error('Error loading modules:', error);
	}
});
