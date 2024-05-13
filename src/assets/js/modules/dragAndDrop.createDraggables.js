import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { options } from './dragAndDrop.options';

gsap.registerPlugin(Draggable);

function createDraggables() {
	const icons = document.querySelectorAll('[data-draggable="icon"]');
	const windows = document.querySelectorAll('[data-draggable="window"]');

	Draggable.create(icons, {
		...options.global,
		...options.icons,
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
