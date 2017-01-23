// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Navbar = require('../Navbar/Navbar');

// Style sheets
require('./main.css');

// var moment = require('moment');
// var _ = require('underscore');

var App = React.createClass({
    render () {
    	return (
    		<div className="container" style={{'padding': '25px'}}>
    			<Navbar />
	    	</div>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
