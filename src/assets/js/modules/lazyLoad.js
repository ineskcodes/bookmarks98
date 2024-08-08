export const lazyLoadImages = () => {
	const lazyImages = Array.from(document.querySelectorAll('img.lazy'));

	if ('IntersectionObserver' in window) {
		let lazyImageObserver = new IntersectionObserver(function (
			entries,
			observer
		) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					if (lazyImage.dataset.src) {
						lazyImage.src = lazyImage.dataset.src;
					} else {
						lazyImage.srcset = lazyImage.dataset.srcset;
					}
					lazyImage.classList.remove('lazy');
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	}
};

lazyLoadImages();
