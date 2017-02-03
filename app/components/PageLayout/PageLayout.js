import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';

// Styles
require('./pagelayout.css');

export default class PageLayout extends React.Component {
	render () {
		return (			
			<div className="content">
				<Navbar />
				{this.props.children}
			</div>
		)
	}
}