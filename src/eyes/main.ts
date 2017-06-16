import Config from '../config/pinConfig';
import { Led } from 'johnny-five';

export class Eyes {
	private leftLed: Led;
	private rightLed: Led = new Led(Config['right-eye']);

	constructor() {
		this.leftLed = new Led(Config['left-eye']);
		this.rightLed = new Led(Config['right-eye']);
		this.turnOnEyes();
	}

	public wink = () => {
		this.rightLed.off();
		setTimeout(() => {
			this.rightLed.on();
		}, 500);
	}

	public turnOnEyes = () => {
		this.leftLed.on();
		this.rightLed.on();
	}

	public turnOffEyes = () => {
			this.leftLed.off();
			this.rightLed.off();
	}
}
