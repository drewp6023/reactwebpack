var React = require('react');

// Components
var FamilyMembers = require('./FamilyMembers');
var ShowList = require('./ShowList');

var FamilyContainer = React.createClass({
	getInitialState: function() {
		return {
			name: 'Drew Pickering',
			familyMembers: ['Marc', 'Duane', 'Mary']
		}
	},
	addFamilyMember: function(familyMember) {
		this.setState({
			familyMembers: this.state.familyMembers.concat([familyMember])
		});
	},
	render: function() {
		return (
			<div>
				<h3>{ this.state.name } Family</h3>
				<FamilyMembers addNew={this.addFamilyMember} />
				<ShowList names={this.state.familyMembers} />
			</div>
		);
	}
});

module.exports = FamilyContainer;