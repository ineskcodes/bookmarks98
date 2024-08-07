import { checkIfOverlap, getDraggableType } from './utils';

function onItemDrag(draggable) {
	const { target } = draggable;
	const draggableType = getDraggableType(draggable);

	if (draggableType === 'icon') {
		const { zIndex, doNotOverlapWith } = draggable.vars;
		const isOverlapping = checkIfOverlap(draggable, doNotOverlapWith);

		if (zIndex) {
			target.style.zIndex = zIndex.onDragStart;
			target.parentElement.style.zIndex = zIndex.onDragStart;
		}

		target.parentElement.classList.add('on-drag');

		if (isOverlapping) {
			target.setAttribute('data-overlap', '');
		} else {
			target.removeAttribute('data-overlap');
		}
	}
}

export default onItemDrag;
