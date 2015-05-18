import React from 'react';


class Clicks extends React.Component {
	constructor() {
		super();
		this.state = {clicks: 0};
	}
	countup(e) {
		e.preventDefault();

		this.setState({
			clicks: this.state.clicks + 1
		});
	}
	render() {
		return (
			<div className="sample-body">
				<div className="sample-count">
					Clicks:<span>{this.state.clicks}</span>
				</div>
				<div className="sample-action">
					<a href="#" className="btn" onClick={this.countup.bind(this)}>Click Me!</a>
				</div>
			</div>
		)
	}
}

React.render(<Clicks />, document.getElementById('clicks'));
