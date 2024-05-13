import gsap from 'gsap';
import { getLastPositionFromLocalStorage } from './utils';

function cancelDrop(draggable) {
	const { target } = draggable;
	const lastPosition = getLastPositionFromLocalStorage(draggable);

	gsap.to(target, {
		duration: 0,
		x: lastPosition ? lastPosition.x : 0,
		y: lastPosition ? lastPosition.y : 0,
	});

	target.style.zIndex = draggable.vars.zIndex.onDragEnd;
}

export default cancelDrop;
