var axios = require('axios');

var API_BASE_URL = 'http://api.openweathermap.org/data/2.5/';

function prepParams(location) {
    var params = {
        q: location,
        type: 'accurate',
        APPID: '3c84cf8aa14ae411e1de0d455332449b',
        cnt: 5
    };

    return Object.keys(params).map(function(key) {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');
}

function prepURL(type, location) {
    return API_BASE_URL + type + '?' + prepParams(location);
}

function getCurrentWeather(location) {
    return axios.get(prepURL('weather', location))
        .then(function(currentWeatherData) {
            return currentWeatherData.data;
        });
}

function getWeatherForecast(location) {
    return axios.get(prepURL('forecast/daily', location))
        .then(function(forecastData) {
            return forecastData.data;
        });
}

var weatherAPI = {
    getCurrentWeather: getCurrentWeather,
    getWeatherForecast: getWeatherForecast
};

module.exports = weatherAPI;