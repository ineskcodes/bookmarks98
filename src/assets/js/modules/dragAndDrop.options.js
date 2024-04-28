import onItemDrag from './dragAndDrop.onDrag';
import onItemDragEnd from './dragAndDrop.onDragEnd';

export const options = {
	global: {
		bounds: 'body',
		throwProps: true,
		type: 'x,y',
		edgeResistance: 0.8,
		dragClickables: true,
		onDragEnd: function () {
			onItemDragEnd(this);
		},
		onDrag: function () {
			onItemDrag(this);
		},
	},
	icons: {
		zIndex: {
			onDragStart: 9999,
			onDragEnd: 0,
		},
		doNotOverlapWith: [
			document.querySelectorAll('[data-draggable="window"]'),
			document.querySelector('.footer'),
			...document.querySelectorAll('[data-draggable="icon"]'),
		],
	},
	window: {
		triggerSelector: '[data-trigger]',
	},
};
