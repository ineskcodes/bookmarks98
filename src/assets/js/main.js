import './modules/menu.js';
import './modules/bookmarks.js';
import './modules/settings.js';
import './modules/windowManager.js';

const vw = Math.max(
	document.documentElement.clientWidth || 0,
	window.innerWidth || 0
);

if (vw >= 700) {
	import('./modules/dragAndDrop.createDraggables.js').then(
		(createDraggables) => {
			createDraggables.default();
		}
	);
}
