import cancelDrop from './dragAndDrop.cancelDrop';
import drop from './dragAndDrop.drop';
import { checkIfOverlap, getDraggableType } from './utils';

function onItemDragEnd(draggable) {
	const { target } = draggable;
	const { zIndex, doNotOverlapWith } = draggable.vars;
	const draggableType = getDraggableType(draggable);
	const isOverlapping = checkIfOverlap(draggable, doNotOverlapWith);

	if (!draggable) {
		return;
	}

	if (draggableType === 'icon' && isOverlapping) {
		cancelDrop(draggable);
	} else {
		drop(draggable);
	}

	if (zIndex) {
		target.style.zIndex = zIndex.onDragEnd;
	}

	target.removeAttribute('data-overlap');
}

export default onItemDragEnd;
