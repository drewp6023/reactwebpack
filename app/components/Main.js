// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('../css/custom.css');

// Component Registry
var PersonWall = require('./PersonWall');

// Models
var PeopleModel = require('../models/PeopleModel');
var moment = require('moment');
var _ = require('underscore');

var App = React.createClass({
    mixins: [ReactFireMixin],
	getInitialState () {
		return {
			input: '',
            people: [],

		}
	},
	componentWillMount () {
		var peopleRef = new Firebase("https://blazing-dtp.firebaseio.com/people");
        this.bindAsArray(peopleRef, "people");
    },
    handleChange (event) {
        this.setState({
            input: event.target.value
        })
    },
    addPerson (event) {
        event.preventDefault();

        // this.firebaseRefs['people'].push({
        //     ID: parseInt(_.uniqueId()),
        //     name: 'Drew',
        //     birthday: moment(new Date('1986/10/03')).format('LL'),
        //     age: moment().diff(new Date('1986/10/03'), 'years')
        // });
	},
    render () {
    	return (
    		<div className="container" style={{'padding': '25px'}}>
    			<div className="row">
    				<div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.input} defaultValue="Add a person..." onChange={this.handleChange} />
                        <br />
    					<button className="btn btn-primary btn-lg" onClick={this.addPerson}>Add</button>
    				</div>
    				<div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
    					       <PersonWall person={this.state.input} />
                            </div>
                        </div>
    				</div>
    			</div>
	    	</div>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
