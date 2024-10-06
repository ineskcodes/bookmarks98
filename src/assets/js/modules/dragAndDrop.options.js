import onItemDrag from './dragAndDrop.onDrag';
import onItemDragEnd from './dragAndDrop.onDragEnd';
import onItemClick from './dragAndDrop.onClick';

export const options = {
	global: {
		bounds: '.root__desktop',
		throwProps: true,
		type: 'x,y',
		edgeResistance: 0.85,
		dragClickables: true,
		onDragEnd: function () {
			onItemDragEnd(this);
		},
		onClick: function () {
			onItemClick(this);
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
		zIndexBoost: true,
	},
};
