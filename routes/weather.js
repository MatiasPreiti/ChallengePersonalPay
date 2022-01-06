//endpoint /location route
const express = require('express');
const weatherController = require('../controllers/weather');

const weatherRouter = express.Router();

weatherRouter.get(
  '/current/:city?/:countryCode?',
  weatherController.dataCurrentCity
);
weatherRouter.get(
  '/forecast/:city?/:countryCode?',
  weatherController.dataForecastCity
);
module.exports = weatherRouter;
