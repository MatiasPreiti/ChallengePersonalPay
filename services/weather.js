const axios = require('axios');

const APIkey = 'e758169540fefcaf4a8857b0f98a7a61';

const dataCurrentCity = async (city, country) => {
  const openWeatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`;

  try {
    const data = await axios(openWeatherCurrent);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const dataForecastCity = async (city, country) => {
  const openWheatherForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIkey}`;

  try {
    const data = await axios(openWheatherForecast);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { dataCurrentCity, dataForecastCity };
