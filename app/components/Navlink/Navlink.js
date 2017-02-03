// Dependencies
import React from 'react';
import {IndexLink} from 'react-router';

// Components

// Style sheets
require('./navlink.css');

// const moment = require('moment');
// const _ = require('underscore');

export default class Navlink extends React.Component {
    render () {
        const isActive = this.context.router.isActive(this.props.to, true);
        const className = isActive ? "active" : "";

    	return (
            <li className={className + ' nav-link'}>
                <IndexLink activeClassName={className} {...this.props}>{this.props.name}</IndexLink>
            </li>
    	)
    }
}

Navlink.contextTypes = {
	router: React.PropTypes.object
}