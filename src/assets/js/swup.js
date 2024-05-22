import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook'],
	plugins: [new SwupHeadPlugin(), new SwupScriptsPlugin({ body: false })],
});
