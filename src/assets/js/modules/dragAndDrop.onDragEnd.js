import cancelDrop from './dragAndDrop.cancelDrop';
import { checkIfOverlap, getDraggableType } from './utils';

function onItemDragEnd(draggable) {
	const { target } = draggable;
	const { zIndex, doNotOverlapWith } = draggable.vars;
	const draggableType = getDraggableType(target);
	const isOverlapping = checkIfOverlap(draggable, doNotOverlapWith);

	if (!draggable) {
		return;
	}

	if (zIndex) {
		target.style.zIndex = zIndex.onDragEnd;
	}

	if (draggableType === 'icon' && isOverlapping) {
		cancelDrop(draggable);
	}
}

export default onItemDragEnd;
