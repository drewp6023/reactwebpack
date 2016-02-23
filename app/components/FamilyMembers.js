var React = require('react');

var FamilyMembers = React.createClass({
	getInitialState: function() {
		return {
			newFamilyMember: ''
		}
	},
	updateFamilyMember: function(event) {
		this.setState({
			newFamilyMember: event.target.value
		});
	},
	handleNewFamilyMember: function() {
		this.props.addNew(this.state.newFamilyMember);
		this.setState({
			newFamilyMember: ''
		});
	},
	render: function() {
		return (
			<div>
				<input type="text" value={this.state.newFamilyMember} onChange={this.updateFamilyMember} />
				<button onClick={ this.handleNewFamilyMember }> Add Family Member </button>
			</div>
		)
	}
});

module.exports = FamilyMembers;