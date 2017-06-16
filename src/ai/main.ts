import {EventEmitter} from 'events';

export class Test extends EventEmitter {
	constructor() {
		super();
	}
	public start() {
		let time = Math.floor(Math.random() * 1500) + 500;
		setTimeout(() => {
			this.emit('wink')
		}, time);
	}
}
