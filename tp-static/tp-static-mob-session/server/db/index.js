// do we need this? have similar thing in models
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});

module.exports = db;
