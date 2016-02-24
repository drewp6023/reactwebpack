var React = require('react');

var Navbar = React.createClass({
    getInitialState: function() {
        return {
            links: ["Home", "About", "Contact"]
        }
    },
    render: function() {
        var listItems = this.state.links.map(function(link, index) {
            if (index == 0) {
                return <li  key={ index } className="active"><a href="#">{ link }</a></li>;
            } else {
                return <li key={ index }><a href="#">{ link }</a></li>;
            }
        });

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <a className="navbar-brand" href="">ReactJS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            { listItems }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;