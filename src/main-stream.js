import { Readable, Writable, Transform } from 'stream';

const opts = {
	objectMode: true
};

class ClickController extends Readable {
	constructor(el) {
		super(opts);

		el.addEventListener('click', e => {
			e.preventDefault();
			this.push(e);
		});
	}
	_read() {}
}

class Clicks extends Transform {
	constructor(state) {
		super(opts);

		this._value = state.clicks;
		this.push(this._value);
	}
	_transform(chunk, encoding, done) {
		this._value++;
		this.push(this._value);
		done();
	}
}

class ClickCount extends Writable {
	constructor(el) {
		super(opts);

		this._el = el;
	}
	_write(chunk, encoding, callback) {
		this._el.innerHTML = chunk;
		callback();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let controller = new ClickController(document.getElementById('js-btn'));
	let model = new Clicks({clicks: 0});
	let view = new ClickCount(document.getElementById('js-clicks'));

	controller
		.pipe(model)
		.pipe(view);
});
