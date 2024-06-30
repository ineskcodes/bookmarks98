document.documentElement.classList.remove('no-js');

(function () {
	// Check if localStorage is supported and available
	// source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
	function storageAvailable(type) {
		let storage;
		try {
			storage = window[type];
			const x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		} catch (e) {
			return (
				e instanceof DOMException &&
				(e.code === 22 ||
					e.code === 1014 ||
					e.name === 'QuotaExceededError' ||
					e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				storage &&
				storage.length !== 0
			);
		}
	}

	if (storageAvailable) {
		const root = document.documentElement;
		const switcher = localStorage.getItem('switcher');
		const wallpapers = JSON.parse(localStorage.getItem('wallpapers'));
		const displayMode = localStorage.getItem('display-mode');
		const previewRatio = localStorage.getItem('preview-ratio');
		const theme = localStorage.getItem('theme');

		for (const [key, value] of Object.entries(localStorage)) {
			if (key.includes('-position')) {
				root.style.setProperty(`--${key}-x`, `${JSON.parse(value).x}px`);
				root.style.setProperty(`--${key}-y`, `${JSON.parse(value).y}px`);
			}
		}

		let selectedWallpaper = null;

		if (wallpapers) {
			selectedWallpaper = wallpapers.find((wallpaper) => wallpaper.isEnabled);

			if (selectedWallpaper) {
				root.style.setProperty(
					'--wallpaper',
					`url("${selectedWallpaper.src}")`
				);
			}
		}

		if (displayMode) {
			const styleMap = {
				center: { size: 'auto', repeat: 'no-repeat', position: 'center' },
				tile: { size: 'auto', repeat: 'repeat', position: 'auto' },
				stretch: {
					size: '100% 100%',
					repeat: 'no-repeat',
					position: 'auto',
				},
			};
			const selectedStyle = styleMap[displayMode];
			Object.entries(selectedStyle).forEach(([prop, value]) =>
				root.style.setProperty(`--${prop}`, value)
			);
		}

		if (theme) {
			root.dataset.theme = theme;
			root.style.setProperty('--theme-preview', `url("../${theme}.png")`);
		}

		window.addEventListener('DOMContentLoaded', () => {
			const switcherEl = document.querySelector(
				'.switcher__wallpapers:not([data-placeholder])'
			);

			if (switcher) {
				switcherEl.innerHTML = switcher;
			}

			const wallpaperInputs = document.querySelectorAll(
				'input[name="wallpaper"]'
			);
			const wallpaperName = selectedWallpaper ? selectedWallpaper.name : 'none';
			const selectedWallpaperInput = [...wallpaperInputs].find(
				(input) => input.value === wallpaperName
			);

			if (selectedWallpaperInput) {
				wallpaperInputs.forEach((input) => input.classList.remove('applied'));
				selectedWallpaperInput.checked = true;
				selectedWallpaperInput.classList.add('applied');
			}

			if (displayMode) {
				const displaySelect = document.querySelector('#display-select');
				displaySelect.value = displayMode;
			}

			if (previewRatio) {
				root.style.setProperty(`--preview-size`, previewRatio);
			}

			if (theme) {
				const themeSelect = document.querySelector('#theme-select');
				themeSelect.value = theme;
			}
		});
	}
})();
