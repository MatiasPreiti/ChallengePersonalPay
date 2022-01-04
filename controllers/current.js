const currentService = require('../services/current');
const locationservice = require('../services/location');

const dataCurrentCity = async (req, res, next) => {
  if (req.params.city == null) {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const city = await locationservice.getLocation(ip);
    console.log(city);
  } else {
    console.log(req.params.city);
  }
};

module.exports = { dataCurrentCity };
