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

var Main = React.createClass({
    render () {
    	return (
			<Router history={hashHistory}>
				<Route path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
			</Router>
    	)
    }
})

// Rendering
ReactDOM.render(<Main />, document.getElementById('app-container'));