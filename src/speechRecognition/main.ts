import Config from '../config/pinConfig';
import Keys from '../config/keys';
import {Button} from 'johnny-five';
import {EventEmitter} from 'events';

export class SpeechRecognition extends EventEmitter {
	private button: Button;
	constructor() {
		super();
		this.button = new Button({
			pin: Config['speechSwitch'],
	  		invert: false
		});
		this.button.on('hold', () => {
			
		});
	}

}
