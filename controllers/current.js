const currentService = require('../services/current');
const locationservice = require('../services/location');

const dataCurrentCity = async (req, res, next) => {
  if (req.params.city == null) {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const ipData = await locationservice.getLocation(ip);
    const response = await currentService.dataCurrentCity(
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
    const response = await currentService.dataCurrentCity(city, countryCode);
    res.status(200).json({
      city: city,
      weather: response.weather,
      temp: response.main
    });
  }
};

module.exports = { dataCurrentCity };
