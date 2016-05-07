var React = require('react');
var PropTypes = React.PropTypes;
var forecastHelpers = require('../utils/forecastHelpers');

var styles = {
    container: {
        display: 'inline-block',
        width: '25%',
        padding: '20px',
        verticalAlign: 'top',
        cursor: 'pointer'
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

function DayItem(props) {
    var icon = './app/images/weather-icons/' + props.weatherData.weather[0].icon + '.svg';
    var unixTimestamp = props.weatherData.dt;

    return (
        <div style={styles.container} onClick={props.handleClick}>
            <img src={icon} style={styles.img} />
            <span className="h3" style={styles.label}>{forecastHelpers.getDate(unixTimestamp)}</span>
        </div>
    );
}

DayItem.propTypes = {
    weatherData: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

module.exports = DayItem;