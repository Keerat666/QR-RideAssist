var express = require('express');
var router = express.Router();
const DriverModel = require('../models/drivers')

// var users = require('../controllers/users')

var crud = require('../middlewares/crud')

router.get('/test', function(req, res) {
    res.send('Driver Route is Up and Running.');
});

router.get('/allDrivers', function(req, res) {
    crud.getAllEntries(req, res, DriverModel)
});

router.get('/DriverByID', function(req, res) {
    crud.getEntryByID(req, res, DriverModel)
});

router.post('/signup', function(req, res) {
    crud.createEntry(req, res, DriverModel)
});

router.post('/login', function(req, res) {
    users.user_login(req, res)
});

router.put('/edit', function(req, res) {
    crud.updateEntryByID(req, res, DriverModel);
});

router.delete('/delete', function(req, res) {
    crud.deleteEntryByID(req, res, DriverModel);
});


module.exports = router;