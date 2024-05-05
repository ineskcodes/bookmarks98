import gsap from 'gsap';

function cancelDrop(draggable) {
	const { target } = draggable;

	gsap.to(target, {
		duration: 0,
		x: 0,
		y: 0,
	});

	target.style.zIndex = draggable.vars.zIndex.onDragEnd;
}

export default cancelDrop;
