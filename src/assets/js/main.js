import './modules/menu.js';
import './modules/bookmarks.js';
import './modules/settings.js';

import('./modules/dragAndDrop.createDraggables.js').then((createDraggables) => {
	createDraggables.default();
});
