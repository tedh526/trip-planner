var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});

var Place = require('./place');

var Restaurant = db.define('restaurant', {
	name: {type: Sequelize.STRING, allowNull: false},
	cuisine: {type: Sequelize.STRING, allowNull: false},
	price: {type: Sequelize.INTEGER, allowNull: false}
})


Restaurant.belongsTo(Place);


module.exports = Restaurant;