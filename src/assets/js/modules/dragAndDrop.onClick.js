import { getDraggableType } from './utils';

function onItemClick(draggable) {
	const { target } = draggable;
	const draggableType = getDraggableType(draggable);

	if (draggableType === 'window') {
		target.dispatchEvent(new Event('activewindow'));
	}
}

export default onItemClick;
