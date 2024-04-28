import gsap from 'gsap';

function cancelDrop(draggable) {
	const { target } = draggable;
	const position = null;

	gsap.to(target, {
		duration: 0,
		x: position ? position.x : 0,
		y: position ? position.y : 0,
	});

	target.style.zIndex = draggable.vars.zIndex.onDragEnd;
}

export default cancelDrop;
