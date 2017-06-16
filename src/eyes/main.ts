import * as Config from '../config/pinConfig';
import {Led} from 'johnny-five';

export class Eyes {
	private leftLed: Led;
	private rightLed: Led = new Led(Config['right-eye']);

	constructor() {
		this.leftLed = new Led(Config['left-eye']);
		this.rightLed = new Led(Config['right-eye']);
	}

	public wink = () => {
		this.leftLed.on();
		setTimeout(() => {
			this.leftLed.off();
		}, 500);
	}
}
