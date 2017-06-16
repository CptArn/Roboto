import * as say from 'say';
import * as moment from 'moment';

export class Speak {
	constructor() {

	}

	public say(text: string) {
		say.speak(text);
	}

	public getDateString(): string {
		return moment().format('[Today is] dddd Do [of] MMMM[. The time is] H:mm');
	}

	public introduction(): string {
		return 'Hello, my name is ...! I am ready to serve you';
	}
}
