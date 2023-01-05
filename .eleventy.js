module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'css/' });

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
