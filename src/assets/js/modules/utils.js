export const getDraggableType = (element) => {
	return element.dataset.draggable;
};

export const checkIfOverlap = (draggable, elements) =>
	elements.some((el) => draggable.hitTest(el, '25%'));
