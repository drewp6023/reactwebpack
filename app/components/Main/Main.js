// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// Components
import HomePage from '../HomePage/HomePage';
import DestinationsPage from '../DestinationsPage/DestinationsPage';
import PageLayout from '../PageLayout/PageLayout';

// Stores

// Style sheets
import './main.css';

// const moment = require('moment');
// const _ = require('underscore');

// Main routing
export default class Main extends React.Component {
    render () {
    	return (
			<Router history={hashHistory}>
				<Route path="/" component={PageLayout}>
					<IndexRoute component={HomePage}></IndexRoute>
					<Route path="/destinations" component={DestinationsPage}></Route>
				</Route>
			</Router>
    	)
    }
}

// Rendering
ReactDOM.render(<Main />, document.getElementById('app-container'));