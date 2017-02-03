// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

// Components
var Home = require('../Home/Home');
var About = require('../About/About');

// Style sheets
require('./main.css');

// var moment = require('moment');
// var _ = require('underscore');

// Main routing
var Main = React.createClass({
    render () {
    	return (
			<Router history={hashHistory}>
				<IndexRoute component={HomePage}></IndexRoute>
				<Route path="/about" component={About}></Route>
			</Router>
    	)
    }
})

// Rendering
ReactDOM.render(<Main />, document.getElementById('app-container'));
