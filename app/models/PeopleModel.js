var moment = require('moment');
var _ = require('underscore');

var People = [
	{
		ID: parseInt(_.uniqueId()),
		name: 'Drew',
		birthday: moment(new Date('1986/10/03')).format('LL'),
		age: moment().diff(new Date('1986/10/03'), 'years')
	},
	{
		ID: parseInt(_.uniqueId()),
		name: 'Alex',
		birthday: moment(new Date('1989/06/18')).format('LL'),
		age: moment().diff(new Date('1989/06/18'), 'years')
	},
	{
		ID: parseInt(_.uniqueId()),
		name: 'Marc',
		birthday: moment(new Date('1990/07/26')).format('LL'),
		age: moment().diff(new Date('1990/07/26'), 'years')
	},
	{
		ID: parseInt(_.uniqueId()),
		name: 'Duane',
		birthday: moment(new Date('1959/03/15')).format('LL'),
		age: moment().diff(new Date('1959/03/15'), 'years')
	},
	{
		ID: parseInt(_.uniqueId()),
		name: 'Mary',
		birthday: moment(new Date('1959/04/15')).format('LL'),
		age: moment().diff(new Date('1959/04/15'), 'years')
	}
];

module.exports = People;