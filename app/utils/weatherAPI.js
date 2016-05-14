import axios from 'axios';

const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '3c84cf8aa14ae411e1de0d455332449b';

function prepParams(location) {
    const params = {
        q: location,
        type: 'accurate',
        APPID: API_KEY,
        cnt: 5
    };

    return Object.keys(params).map(function(key) {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');
}

function prepURL(type, location) {
    return API_BASE_URL + type + '?' + prepParams(location);
}

export function getCurrentWeather(location) {
    const url = prepURL('weather', location);

    return axios.get(url)
        .then((currentWeatherData) => currentWeatherData.data);
}

export function getWeatherForecast(location) {
    const url = prepURL('forecast/daily', location);

    return axios.get(url)
        .then((forecastData) => forecastData.data);
}