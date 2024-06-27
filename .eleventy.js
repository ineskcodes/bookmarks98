const { minify } = require('terser');

module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/assets/icons': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/misc': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/wallpapers': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/themes': '/' });
	eleventyConfig.addNunjucksAsyncFilter(
		'jsmin',
		async function (code, callback) {
			try {
				const minified = await minify(code);
				callback(null, minified.code);
			} catch (err) {
				console.error('Terser error: ', err);
				// Fail gracefully.
				callback(null, code);
			}
		}
	);

	return {
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',

		pathPrefix: '/bookmarks98',

		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
