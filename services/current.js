const axios = require('axios');

const dataCurrentCity = async (city, country) => {
  const APIkey = 'e758169540fefcaf4a8857b0f98a7a61';
  const openWheatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`;

  try {
    const data = await axios(openWheatherApi);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { dataCurrentCity };
