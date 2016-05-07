var React = require('react');
var PropTypes = React.PropTypes;
var forecastHelpers = require('../utils/forecastHelpers');

var styles = {
    container: {
        marginTop: '40px'
    },

    image: {
        height: '130px'
    }
};

function Detail(props) {
    var icon = './app/images/weather-icons/' + props.weatherData.weather[0].icon + '.svg';
    var unixTimestamp = props.weatherData.dt;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <div className="text-center" style={styles.container}>
                        <img src={icon} alt="" style={styles.image} />
                        <p className="h2">{forecastHelpers.getDate(unixTimestamp)}</p>

                        <br/>

                        <p className="h2">{props.city}</p>
                        <p className="h2">{props.weatherData.weather[0].description}</p>
                        <p className="h2">min temp: {forecastHelpers.getTemperature(props.weatherData.temp.min)} &deg;C</p>
                        <p className="h2">max temp: {forecastHelpers.getTemperature(props.weatherData.temp.max)} &deg;C</p>
                        <p className="h2">humidity: {props.weatherData.humidity}</p>

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

module.exports = Detail;