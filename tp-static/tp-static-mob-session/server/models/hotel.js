var Sequelize = require('sequelize');
var db = require('../db');

var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {type: Sequelize.STRING, allowNull: false},
	num_stars: {type: Sequelize.DECIMAL, allowNull: false},
	amenities: {type: Sequelize.STRING, allowNull: false}
})

module.exports = Hotel;