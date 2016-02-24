// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('../css/custom.css');

// Component Registry
var Navbar = require('./Navbar');

var App = React.createClass({
    render: function() {
        return (
            <Navbar />
        )
    }
});

// Components
ReactDOM.render(<App />, document.getElementById('app-container'));
