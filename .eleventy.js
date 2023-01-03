module.exports = (eleventyConfig) => {
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
