import React from 'react';
import { Link, IndexLink } from 'react-router';

// Components
import Navlink from '../Navlink/Navlink';

// Style sheets
require('./navbar.scss');

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            links: ["Home", "About"]
        }
    }

    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="logo--nav-compressed">askFitness</span>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            { 
                                this.state.links.map(function(link, index) {
                                    return (
                                        <Navlink key={index} to={ '/' + (link == 'Home' ? '' : link) } name={link} />
                                    )
                                })
                            }
                        </ul>
                        <span className="logo"><IndexLink to="/">askFitness</IndexLink></span>
                    </div>
                </div>
            </nav>
        )
    }
}
