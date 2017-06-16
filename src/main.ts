import {Board} from 'johnny-five';
import * as Config from './config/pinConfig';

import {Eyes} from './eyes/main';
import {Body} from './body/main';

import {Test} from './ai/main';
import {SpeechRecognition} from './speechRecognition/main';
import {Speak} from './speaking/main';

// due to weird port being open all the time, com6 has to be set
let board = new Board();
board.on('ready', () => {
	console.log('ready');
	let eyes = new Eyes();
	let body = new Body();
	let ai = new Test();
	let speechRecognition = new SpeechRecognition();
	let speak = new Speak();

	ai.on('wink', () => {
		eyes.wink();
		//speak.say('Hello!' + speak.getDateString());
		speak.say(speak.introduction());
		body.sweep();
	});

	ai.start();
});
