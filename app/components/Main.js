// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Components
var FamilyContainer = require('./FamilyContainer');

ReactDOM.render(<FamilyContainer />, document.getElementById('family-container'));
