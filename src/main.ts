import {Board} from 'johnny-five';
import * as Config from './config/pinConfig';

import {Eyes} from './eyes/main';
import {Test} from './ai/main';

let board = new Board();
board.on('ready', () => {
	// console.log('ready');
	// let eyes = new Eyes();
	// let ai = new Test();
	// ai.on('wink', () => {
	// 	eyes.wink();
	// })
	// ai.start();
});
