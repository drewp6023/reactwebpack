var React = require('react');

var Counter = React.createClass({
	getInitialState () {
		return {
			count: 0
		}
	},
	updateCount () {
		console.log("Hello");
		this.setState({
			count: this.props.count
		});
	},
	render () {
		return (
			<div className="counter">
				{this.state.count}
			</div>
		)
	}
});

module.exports = Counter;