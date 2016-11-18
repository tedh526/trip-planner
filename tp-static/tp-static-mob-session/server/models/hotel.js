var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});

var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {type: Sequelize.STRING, allowNull: false},
	num_stars: {type: Sequelize.DECIMAL, allowNull: false},
	amenities: {type: Sequelize.STRING, allowNull: false}
})

Hotel.belongsTo(Place);

module.exports = Hotel;