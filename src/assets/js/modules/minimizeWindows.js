import gsap from 'gsap';

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

	createTween(el, transformValues, minimize = true) {
		const { x, y, scale } = transformValues;

		const tween = gsap.to(el, {
			duration: 0.3,
			x,
			y,
			scale: minimize ? scale : 1,
			transformOrigin: 'left top',
			autoAlpha: minimize ? '0' : '1',
			onCompleteParams: {
				clearProps: 'all',
			},
			onStart: () =>
				document.documentElement.setAttribute('data-animating', ''),
			onComplete: () =>
				document.documentElement.removeAttribute('data-animating'),
		});
		tween.pause();

		return tween;
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
		const { taskButton, windowEl, isPressed, isMinimized } = detail;

		const taskButtonBounds = await this.createObserver(taskButton);
		const transformedWindowBounds = await this.createObserver(windowEl);
		const untransformedWindowBounds = this.getUntransformedBounds(windowEl);
		const minimizeTransformValues = this.getTransformValues(
			untransformedWindowBounds,
			taskButtonBounds
		);
		const unminimizeTransformValues = this.getTransformValues(
			untransformedWindowBounds,
			transformedWindowBounds
		);
		this.minimizeTween = this.createTween(windowEl, minimizeTransformValues);
		this.unminimizeTween = this.createTween(
			windowEl,
			unminimizeTransformValues,
			false
		);

		if (isPressed && !isMinimized) {
			this.minimize(windowEl, this.minimizeTween);
			this.toggleStates({ taskButton, windowEl }, { isPressed, isMinimized });
		} else {
			this.unminimize(windowEl, this.unminimizeTween);
			this.toggleStates({ taskButton, windowEl }, { isPressed, isMinimized });
			windowEl.dispatchEvent(new Event('mousedown'));
		}
	}

	minimize(windowEl, tween) {
		const initialStyle = windowEl.getAttribute('style');
		const prefersReducedMotion =
			window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

		if (!prefersReducedMotion) {
			tween.play().then(() => {
				tween.kill();
				windowEl.setAttribute('style', initialStyle);
				windowEl.style.visibility = 'hidden';
			});
		}

		windowEl.style.visibility = 'hidden';
		windowEl.style.pointerEvents = 'none';
	}

	unminimize(windowEl, tween) {
		const prefersReducedMotion =
			window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

		if (!prefersReducedMotion) {
			tween.play().then(() => tween.kill());
		}

		windowEl.style.visibility = 'visible';
		windowEl.style.pointerEvents = 'initial';
	}
}

new MinimizeWindows();

export default MinimizeWindows;
