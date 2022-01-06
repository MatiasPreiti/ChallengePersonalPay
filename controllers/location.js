const locationsServices = require('../services/location');

const getLocation = async (req, res, next) => {
  try {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const location = await locationsServices.getLocation(ip);
    res.status(200).json({
      location: location
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLocation };
