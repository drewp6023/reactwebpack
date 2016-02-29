var React = require('react');

var Counter = React.createClass({
	updateCount () {
		this.setState({
			count: this.props.count
		});
	},
	render () {
		return (
			<div className="counter">
				{this.props.count}
			</div>
		)
	}
});

module.exports = Counter;