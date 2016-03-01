var React = require('react');

// Components
var PersonPanel = require('./PersonPanel');

var PersonWall = React.createClass({
	render () {
		var createPanel (input) {
			return (
				<PersonPanel>{input}</PersonPanel>
			);
		}

		return {this.props.person.map(createPanel)}
	}
});

module.exports = PersonWall;