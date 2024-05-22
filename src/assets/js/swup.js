import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';

const swup = new Swup({
	containers: ['#content', '#page-hook'],
	plugins: [new SwupHeadPlugin()],
});
