import gsap from 'gsap';
import {
	getDraggableType,
	getDraggableItemName,
	populateStorage,
} from './utils';

function drop(draggable) {
	let { x, y, target } = draggable;
	const draggableType = getDraggableType(draggable);
	const item = getDraggableItemName(draggable);

	populateStorage(item, { x, y });

	if (draggableType === 'icon') {
		gsap.to(target.previousElementSibling, { duration: 0, x, y });
	}
}

export default drop;
