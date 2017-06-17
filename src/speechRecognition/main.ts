import Config from '../config/pinConfig';
import Keys from '../config/keys';
import {Button} from 'johnny-five';
import {EventEmitter} from 'events';
import * as rec from 'node-record-lpcm16';
import * as request from 'request';

export class SpeechRecognition extends EventEmitter {
	private button: Button;
	constructor() {
		super();
		this.button = new Button({
			pin: Config['speechSwitch'],
	  		invert: false
		});
		
		this.button.on('hold', () => {
			console.log('rec start');
			rec.start().pipe(request.post({
				'url'     : 'https://api.wit.ai/speech',
				'headers' : {
				'Authorization' : 'Bearer ' + Keys['WIT_TOKEN'],
				'Content-Type'  : 'audio/wav'
				}
			}, (err, resp, body) => {
				console.log('error: ' + err);
				console.log('resp: ' + resp[0]);
				console.log('body: ' + body)
			}));
			setTimeout(() => {
				rec.stop();
			}, 5000);
		});
	}

}
