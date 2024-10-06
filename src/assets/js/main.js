import './modules/menu.js';
import './modules/bookmarks.js';
import './modules/settings.js';
import './modules/windowManager.js';
import './modules/resizeObserver.js';
import './modules/taskButtons.js';
import './modules/minimizeWindows.js';
import './modules/viewToggle.js';
import './modules/lazyLoad.js';

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

	import('./modules/maximizeWindows.js').then((MaximizeWindows) => {
		new MaximizeWindows.default();
	});
}
