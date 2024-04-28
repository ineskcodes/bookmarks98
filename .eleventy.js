module.exports = (eleventyConfig) => {
	// styles
	eleventyConfig.addWatchTarget('src/assets/scss');

	// js
	eleventyConfig.addPassthroughCopy({ 'src/assets/js': '/' });

	// icons
	eleventyConfig.addPassthroughCopy({ 'src/assets/icons': '/' });

	// fonts
	eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': '/' });

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
