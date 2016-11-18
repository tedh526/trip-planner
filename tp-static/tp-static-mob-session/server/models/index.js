const db = require('../db');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant')


Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  Activity,
  Hotel,
  Place,
  Restaurant
};



