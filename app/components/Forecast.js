var React = require('react');
var PropTypes = React.PropTypes;
var forecastHelpers = require('../utils/forecastHelpers');

var styles = {
    container: {
        display: 'inline-block',
        width: '25%',
        padding: '20px',
        verticalAlign: 'top'
    },

    img: {
        height: '130px',
        margin: '0 auto 20px auto',
        display: 'block'
    },

    label: {
        display: 'block',
        textAlign: 'center'
    }
};

function Forecast(props) {
    var icon = './app/images/weather-icons/' + props.weatherData.weather[0].icon + '.svg';
    var unixTimestamp = props.weatherData.dt;

    return (
        <div style={styles.container}>
            <img src={icon} style={styles.img} />
            <span className="h3" style={styles.label}>{forecastHelpers.getDate(unixTimestamp)}</span>
        </div>
    );
}

Forecast.propTypes = {
    weatherData: PropTypes.object.isRequired
};

module.exports = Forecast;