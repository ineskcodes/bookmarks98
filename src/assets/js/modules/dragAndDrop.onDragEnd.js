function onItemDragEnd(draggable) {
	const { target } = draggable;
	const { zIndex } = draggable.vars;

	if (!draggable) {
		return;
	}

	if (zIndex) {
		target.style.zIndex = zIndex.onDragEnd;
	}
}

export default onItemDragEnd;
