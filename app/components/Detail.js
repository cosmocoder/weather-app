import React, {PropTypes} from 'react';
import {getDate, getTemperature} from '../utils/forecastHelpers';

const styles = {
    container: {
        marginTop: '40px'
    },

    image: {
        height: '130px'
    }
};

function Detail({weatherData, city}) {
    const icon = './app/images/weather-icons/' + weatherData.weather[0].icon + '.svg';
    const unixTimestamp = weatherData.dt;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <div className="text-center" style={styles.container}>
                        <img src={icon} alt="" style={styles.image} />
                        <p className="h2">{getDate(unixTimestamp)}</p>

                        <br/>

                        <p className="h2">{city}</p>
                        <p className="h2">{weatherData.weather[0].description}</p>
                        <p className="h2">min temp: {getTemperature(weatherData.temp.min)} &deg;C</p>
                        <p className="h2">max temp: {getTemperature(weatherData.temp.max)} &deg;C</p>
                        <p className="h2">humidity: {weatherData.humidity}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = {
    weatherData: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired
};

export default Detail;