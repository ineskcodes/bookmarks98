import gsap from 'gsap';
import {
	getDraggableType,
	getDraggableItemName,
	getLastPositionFromLocalStorage,
	populateStorage,
} from './utils';

function drop(draggable) {
	let { x, y, target } = draggable;
	const lastPosition = getLastPositionFromLocalStorage(draggable);
	const draggableType = getDraggableType(draggable);
	const item = getDraggableItemName(draggable);

	if (lastPosition) {
		x += lastPosition.x;
		y += lastPosition.y;
	}

	populateStorage(item, { x, y });

	if (draggableType === 'icon') {
		gsap.to(target, { duration: 0, x: 0, y: 0 });
		gsap.to(target.parentElement, { duration: 0, x, y });
	}
}

export default drop;
