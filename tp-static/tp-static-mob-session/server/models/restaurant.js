var Sequelize = require('sequelize');
var db = require('../db');

var Place = require('./place');

var Restaurant = db.define('restaurant', {
	name: {type: Sequelize.STRING, allowNull: false},
	cuisine: {type: Sequelize.STRING, allowNull: false},
	price: {type: Sequelize.INTEGER, allowNull: false}
})





module.exports = Restaurant;