export const getDraggableType = (draggable) => {
	return draggable.target.dataset.draggable;
};

export const getDraggableItemName = (draggable) => {
	return draggable.target.dataset.item;
};

export const checkIfOverlap = (draggable, elements) => {
	if (getDraggableType(draggable) !== 'icon') {
		return null;
	}
	return elements.some((el) => draggable.hitTest(el, '25%'));
};

export const populateStorage = (item, value) => {
	localStorage.setItem(item, JSON.stringify(value));
};

export const getLastPositionFromLocalStorage = (draggable) => {
	return JSON.parse(
		localStorage.getItem(`${draggable.target.dataset.item}-position`)
	);
};

export const getMaxZIndex = ([elementA, elementB]) => {
	let zIndexes = [
		getComputedStyle(elementA).zIndex,
		getComputedStyle(elementB).zIndex,
	];

	zIndexes = zIndexes.map((zIndex) =>
		zIndex === 'auto' ? 0 : parseInt(zIndex)
	);

	return zIndexes.reduce((zIndexA, zIndexB) => Math.max(zIndexA, zIndexB));
};
