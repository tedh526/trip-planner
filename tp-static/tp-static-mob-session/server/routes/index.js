const router = require('express').Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
var Place = models.Place;

module.exports = router;

// console.log(Hotel.name);
// router.get('/', function(req, res, next) {
//   var everythingObj = {};
//   Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
//     .then(function(data) {
//       console.log(data.name);
//     })
// })

router.get('/', function(req, res, next) {
    var outerScopeContainer = {};
    Hotel.findAll()
        .then(function(dbHotels) {
            outerScopeContainer.dbHotels = dbHotels;
            return Restaurant.findAll();
        })
        .then(function(dbRestaurants) {
            outerScopeContainer.dbRestaurants = dbRestaurants;
            return Activity.findAll();
        })
        .then(function(dbActivities) {
            res.render('index', {
                templateHotels: outerScopeContainer.dbHotels,
                templateRestaurants: outerScopeContainer.dbRestaurants,
                templateActivities: dbActivities
            });
        })
        .catch(next);
})

