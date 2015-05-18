import Rx from 'rx';
import 'rx-dom';


document.addEventListener('DOMContentLoaded', () => {
	let btn = document.getElementById('js-btn');
	let clickCounter = Rx.Observable.fromEvent(btn, 'click');
	let count = document.getElementById('js-clicks');

	clickCounter
		.map((e) => {
			e.preventDefault();
			return 1;
		})
		.startWith(0)
		.scan(0, (x, y) => x + y)
		.subscribe((x) => count.innerHTML = x);
});
