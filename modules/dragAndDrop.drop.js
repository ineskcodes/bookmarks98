import gsap from 'gsap';
import { getDraggableItemName, populateStorage } from './utils';

function drop(draggable) {
	const { x, y, target } = draggable;
	const item = getDraggableItemName(draggable);

	populateStorage(item, { x, y });

	gsap.to([target, target.previousElementSibling], {
		duration: 0,
		x: x ? x : 0,
		y: y ? y : 0,
	});
}

export default drop;
