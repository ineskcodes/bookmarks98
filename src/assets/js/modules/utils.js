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

	elements = elements.filter((el) => el.dataset.minimized !== 'true');
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

export const getStateBoolean = (el, stateAttr) => {
	return el.getAttribute(stateAttr) === 'true' ? true : false;
};

export const getCorrespondingTaskButton = (windowEl) => {
	return document.querySelector(`#${windowEl.dataset.task}`);
};

export const getCorrespondingWindow = (taskButton) => {
	return document.querySelector(`.window[data-task="${taskButton.id}"]`);
};

export const removeOutlineFromElement = (element, isUsingMouse) => {
	if (isUsingMouse) {
		element.classList.add('remove-outline');
		element.addEventListener(
			'blur',
			() => element.classList.remove('remove-outline'),
			{ once: true }
		);
	}
};
