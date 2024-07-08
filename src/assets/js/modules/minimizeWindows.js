import gsap from 'gsap';
import { getStateBoolean, getCorrespondingTaskButton } from './utils';

class MinimizeWindows {
	constructor() {
		this.windows = Array.from(document.querySelectorAll('.window'));
		this.init();
	}

	init() {
		this.windows.forEach((windowEl) =>
			windowEl.addEventListener(
				'toggleminimize',
				this.toggleMinimize.bind(this)
			)
		);
	}

	createObserver(element) {
		return new Promise((resolve, reject) => {
			const observer = new IntersectionObserver((entries, observer) => {
				let entry = entries[0];
				resolve(entry.boundingClientRect);
				observer.unobserve(element);
			});
			observer.observe(element);
		});
	}

	getUntransformedBounds(element) {
		return {
			x: element.offsetLeft + element.offsetParent.offsetLeft,
			y: element.offsetTop + element.offsetParent.offsetTop,
			width: element.offsetWidth,
		};
	}

	getTransformValues(source, dest) {
		return {
			x: dest.x - source.x,
			y: dest.y - source.y,
			scale: (dest.width / source.width).toFixed(2),
		};
	}

	toggleStates(elements, state) {
		elements.taskButton.setAttribute('aria-pressed', !state.isPressed);
		elements.windowEl.setAttribute('data-minimized', !state.isMinimized);
	}

	checkIfAnimationIsActive() {
		let isActive = false;

		if (this.minimizeTween && this.unminimizeTween) {
			isActive =
				this.minimizeTween.isActive() || this.unminimizeTween.isActive();
		}

		return isActive;
	}

	async toggleMinimize(e) {
		const isAnimationActive = this.checkIfAnimationIsActive();
		if (isAnimationActive) return;

		const { detail } = e;
		const { windowEl, isPressed, unminimize } = detail;
		const isMinimized = getStateBoolean(windowEl, 'data-minimized');
		const taskButton = getCorrespondingTaskButton(windowEl);

		const taskButtonBounds = await this.createObserver(taskButton);
		const transformedWindowBounds = await this.createObserver(windowEl);
		const untransformedWindowBounds = this.getUntransformedBounds(windowEl);

		const transformValues = {
			minimizeValues: this.getTransformValues(
				untransformedWindowBounds,
				taskButtonBounds
			),
			unminimizeValues: this.getTransformValues(
				untransformedWindowBounds,
				transformedWindowBounds
			),
		};

		if (isPressed && !isMinimized) {
			this.minimize(windowEl, transformValues);
			this.toggleStates({ taskButton, windowEl }, { isPressed, isMinimized });
		} else {
			this.unminimize(windowEl, transformValues);
			this.toggleStates({ taskButton, windowEl }, { isPressed, isMinimized });
			windowEl.dispatchEvent(new Event('mousedown'));
		}
	}

	createTweenOptions({
		values,
		duration = 0.3,
		autoAlpha = 0,
		clearProps = null,
	}) {
		return {
			duration,
			x: values.x,
			y: values.y,
			scaleX: values.scale ? values.scale : 1,
			scaleY: values.scale ? values.scale : 1,
			transformOrigin: 'left top',
			autoAlpha,
			clearProps: clearProps ? clearProps : 'clip-path',
			onStart: () =>
				document.documentElement.setAttribute('data-animating', ''),
			onComplete: () =>
				document.documentElement.removeAttribute('data-animating'),
		};
	}

	minimize(windowEl, transformValues) {
		const { minimizeValues } = transformValues;
		const initialStyle = windowEl.getAttribute('style');
		const prefersReducedMotion =
			window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

		if (!prefersReducedMotion) {
			this.minimizeTween = gsap.to(
				windowEl,
				this.createTweenOptions({
					values: minimizeValues,
					clearProps: 'transform, scale',
				})
			);

			this.minimizeTween.play().then(() => {
				windowEl.setAttribute('style', initialStyle);
				windowEl.style.visibility = 'hidden';
			});
		}
	}

	unminimize(windowEl, transformValues) {
		const { minimizeValues, unminimizeValues } = transformValues;
		const prefersReducedMotion =
			window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

		if (!prefersReducedMotion) {
			this.unminimizeTween = gsap
				.timeline()
				.to(
					windowEl,
					this.createTweenOptions({
						values: minimizeValues,
						duration: 0,
					})
				)
				.to(
					windowEl,
					this.createTweenOptions({
						values: unminimizeValues,
						duration: 0.3,
						autoAlpha: 1,
					})
				);
		}
	}
}

new MinimizeWindows();

export default MinimizeWindows;
