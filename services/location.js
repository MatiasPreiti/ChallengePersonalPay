const axios = require('axios');
const { response } = require('express');

const getLocation = async (ip) => {
  const ip_api = `http://ip-api.com/json/`;
  try {
    const location = await axios.get(ip_api);
    return location.data;
  } catch (error) {
    console.log(error);
  }
  console.log(location);
  return location;
};

module.exports = { getLocation };
