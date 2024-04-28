import gsap from 'gsap';
import { getLastPositionFromLocalStorage } from './utils';

function cancelDrop(draggable) {
	const { target } = draggable;
	const position = getLastPositionFromLocalStorage(draggable);

	gsap.to(target, {
		duration: 0,
		x: position ? position.x : 0,
		y: position ? position.y : 0,
	});

	target.style.zIndex = draggable.vars.zIndex.onDragEnd;
}

export default cancelDrop;
