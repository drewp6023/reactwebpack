// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('../css/custom.css');

// Component Registry
var AboutMeSection = require('./AboutMeSection');
var SkillsSection = require('./SkillsSection');
var Footer = require('./Footer');

var App = React.createClass({
    render: function() {
    	return (
    		<div>
	    		<AboutMeSection />
	    		<SkillsSection />
	    		<Footer />
	    	</div>
    	)
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
