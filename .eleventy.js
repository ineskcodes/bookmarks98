module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget('src/assets/scss');
	eleventyConfig.addPassthroughCopy({ 'src/assets/icons': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/misc': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/wallpapers': '/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/themes': '/' });

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
