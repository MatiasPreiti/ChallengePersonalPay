//endpoint /location route
const express = require('express');
const currentController = require('../controllers/current');

const currentRouter = express.Router();

currentRouter.get('/:city?/:countryCode?', currentController.dataCurrentCity);

module.exports = currentRouter;