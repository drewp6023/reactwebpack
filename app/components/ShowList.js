var React = require('react');

var ShowList = React.createClass({
	render: function() {
		var listItems = this.props.names.map(function(name, index) {
			return <li key={ index }>{ name }</li>
		});

		listItems.sort();

		return (
			<div>
				<h3>Family Members</h3>
				<ul>{ listItems }</ul>
			</div>
		)
	}
});

module.exports = ShowList;