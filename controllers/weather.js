const weatherServices = require('../services/weather');
const locationservice = require('../services/location');

const dataCurrentCity = async (req, res, next) => {
  if (req.params.city == null) {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const ipData = await locationservice.getLocation(ip);
    const response = await weatherServices.dataCurrentCity(
      ipData.city,
      ipData.countryCode
    );
    res.status(200).json({
      city: ipData,
      weather: response.weather,
      temp: response.main
    });
  } else {
    const city = req.params.city;
    const countryCode = req.params.countryCode;
    const response = await weatherServices.dataCurrentCity(city, countryCode);
    if (response.name == 'Error') {
      res.status(404).json({
        status: 404,
        error: response.message
      });
    } else {
      res.status(200).json({
        city: city,
        weather: response.weather,
        temp: response.main
      });
    }
  }
};

const dataForecastCity = async (req, res, next) => {
  if (req.params.city == null) {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const ipData = await locationservice.getLocation(ip);
    const response = await weatherServices.dataForecastCity(
      ipData.city,
      ipData.countryCode
    );
    res.status(200).json({
      city: ipData,
      weather: response.list
    });
  } else {
    const city = req.params.city;
    const countryCode = req.params.countryCode;
    const response = await weatherServices.dataForecastCity(city, countryCode);
    if (response.name == 'Error') {
      res.status(404).json({
        status: 404,
        error: response.message
      });
    } else {
      res.status(200).json({
        city: city,
        weather: response.list
      });
    }
  }
};

module.exports = { dataCurrentCity, dataForecastCity };
