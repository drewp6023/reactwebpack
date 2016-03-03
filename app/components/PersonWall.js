var React = require('react');

// Components
var PersonPanel = require('./PersonPanel');

var PersonWall = React.createClass({
	render () {
		return (
			<PersonPanel />
		);
	}
});

module.exports = PersonWall;