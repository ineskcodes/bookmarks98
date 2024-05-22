import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { options } from './dragAndDrop.options';

gsap.registerPlugin(Draggable);

async function createDraggables() {
	const icons = document.querySelectorAll('[data-draggable="icon"]');
	const windows = document.querySelectorAll('[data-draggable="window"]');
	const doNotOverlapWith = options.icons.doNotOverlapWith
		.map((selector) => [...document.querySelectorAll(selector)])
		.flat();

	Draggable.create(icons, {
		...options.global,
		...options.icons,
		doNotOverlapWith,
	});

	if (windows) {
		windows.forEach((windowEl) => {
			Draggable.create(windowEl, {
				...options.global,
				...options.window,
				trigger: windowEl.querySelector(options.window.triggerSelector),
			});
		});
	}
}

export default createDraggables;
