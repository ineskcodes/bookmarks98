import { getDraggableItemName, populateStorage } from './utils';

function drop(draggable) {
	const { x, y, target } = draggable;
	const item = getDraggableItemName(draggable);

	populateStorage(item, { x, y });
}

export default drop;
