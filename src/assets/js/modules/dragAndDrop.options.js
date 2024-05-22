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
			'[data-draggable="window"]',
			'footer',
			'[data-draggable="icon"]',
		],
		zIndex: {
			onDragStart: 9999,
			onDragEnd: 'auto',
		},
		zIndexBoost: false,
	},
	window: {
		triggerSelector: '[data-trigger]',
	},
};
