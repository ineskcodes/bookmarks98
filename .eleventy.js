module.exports = (eleventyConfig) => {
	// icons
	eleventyConfig.addPassthroughCopy({ 'src/assets/icons': '/' });

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
