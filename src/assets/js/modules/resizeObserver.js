const resizeObserver = new ResizeObserver((entries) => {
	for (const entry of entries) {
		if (entry.contentBoxSize) {
			const windowHeight = entry.contentBoxSize[0].blockSize;
			document.documentElement.style.setProperty(
				'--vh',
				`${windowHeight * 0.01}px`
			);
		}
	}
});

resizeObserver.observe(document.documentElement);
