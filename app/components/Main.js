// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Components
var Testing = require('./Testing');
var HelloMessage = require('./HelloMessage');

ReactDOM.render(<HelloMessage name="Drew" />, document.getElementById('hello'));
ReactDOM.render(<Testing />, document.getElementById('testing'));
