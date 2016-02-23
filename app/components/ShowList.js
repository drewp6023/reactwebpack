var React = require('react');

var ShowList = React.createClass({
	render: function() {
		var listItems = this.props.names.map(function(name) {
			return <li>{name}</li>
		});

		return (
			<div>
				<h3>Family Members</h3>
				<ul>{listItems}</ul>
			</div>
		)
	}
});

module.exports = ShowList;