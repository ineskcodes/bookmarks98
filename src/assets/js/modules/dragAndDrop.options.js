import onItemDrag from './dragAndDrop.onDrag';
import onItemDragEnd from './dragAndDrop.onDragEnd';

export const options = {
	global: {
		bounds: 'body',
		throwProps: true,
		type: 'x,y',
		edgeResistance: '300%',
		dragClickables: true,
		onDragEnd: function () {
			onItemDragEnd(this);
		},
		onDrag: function () {
			onItemDrag(this);
		},
	},
	icons: {
		cursor: 'pointer',
		doNotOverlapWith: [
			document.querySelectorAll('[data-draggable="window"]'),
			document.querySelector('.footer'),
			...document.querySelectorAll('[data-draggable="icon"]'),
		],
		zIndex: {
			onDragStart: 9999,
			onDragEnd: 'auto',
		},
	},
	window: {
		triggerSelector: '[data-trigger]',
	},
};
