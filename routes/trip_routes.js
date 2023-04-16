var express = require('express');
var router = express.Router();
const TripModel = require('../models/trips')

var trip = require('../controllers/trips')

var crud = require('../middlewares/crud')

router.get('/test', function(req, res) {
    res.send('Trip Route is Up and Running.');
});

router.get('/allTrips', function(req, res) {
    crud.getAllEntries(req, res, TripModel)
});

router.get('/TripByID', function(req, res) {
    crud.getEntryByID(req, res, TripModel)
});

router.post('/signup', function(req, res) {
    crud.createEntry(req, res, TripModel)
});

router.post('/initiateTrip', function(req, res) {
   trip.create_trip(req,res)
});


router.post('/login', function(req, res) {
    users.user_login(req, res)
});

router.put('/edit', function(req, res) {
    crud.updateEntryByID(req, res, TripModel);
});

router.delete('/delete', function(req, res) {
    crud.deleteEntryByID(req, res, TripModel);
});


module.exports = router;