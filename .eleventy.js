module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ 'src/assets/images': '/' });

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
