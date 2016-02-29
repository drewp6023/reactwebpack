// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('../css/custom.css');

// Component Registry

// Models
var PeopleModel = require('../models/PeopleModel');

var App = React.createClass({
	getInitialState () {
		return {
			count: 0,
			text: "I'm a counter"
		}
	},
	componentWillMount () {
		this.firebaseRef = new Firebase("https://blazing-dtp.firebaseio.com");
		this.firebaseRef.on('child_added', function(dataSnapshot) {
			console.log(dataSnapshot, dataSnapshot.val());
		}.bind(this));
	},
	handleClick (event) {
		event.preventDefault();
		this.setState({
			count: (this.state.count + 1)
		});
	},
	clearCounter () {
		this.setState({
			count: 0
		});
	},
    render () {
    	return (
    		<div className="container" style={{'padding': '25px'}}>
    			<div className="row">
    				<div className="col-md-6">
    					<button className="btn btn-primary btn-lg" onClick={this.handleClick}>Initialize</button>
    					<br /><br />
    					<button className="btn btn-danger btn-lg" onClick={this.clearCounter}>Clear</button>
    				</div>
    				<div className="col-md-6">
    					<div className="panel pandel-default">
    						<div className="panel-body">
    							{this.state.count}
    						</div>
    					</div>
    				</div>
    			</div>
	    	</div>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
