module.exports = (eleventyConfig) => {
	// styles
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'css/' });

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
