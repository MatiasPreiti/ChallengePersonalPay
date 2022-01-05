const axios = require('axios');

const getLocation = async (ip) => {
  const ip_api = `http://ip-api.com/json/`;
  try {
    const location = await axios.get(ip_api);
    return location.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getLocation };
