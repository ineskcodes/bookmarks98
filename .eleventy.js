module.exports = (eleventyConfig) => {
	// styles
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'css/' });

	// images
	eleventyConfig.addPassthroughCopy({ 'src/assets/images': '/' });

	// fonts
	eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': '/' });

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		pathPrefix: '/bookmarks98/',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
