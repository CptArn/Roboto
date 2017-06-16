import {Board} from 'johnny-five';
import * as Config from './config/pinConfig';

import {Eyes} from './eyes/main';
import {Test} from './ai/main';

// due to weird port being open all the time, com6 has to be set
let board = new Board({ port: "COM6" });
board.on('ready', () => {
	console.log('ready');
	let eyes = new Eyes();
	let ai = new Test();
	ai.on('wink', () => {
		eyes.wink();
	});
	ai.start();
});
