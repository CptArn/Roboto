import Config from '../config/pinConfig';
import { Servo } from 'johnny-five';

export class Body {
	private servoX: Servo;

	constructor() {
		this.servoX = new Servo({
            pin: Config['servo-x'],
            center: true
        });
	}

	public sweep = () => {
		this.servoX.sweep();
	}

}
