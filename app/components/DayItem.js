import React, {PropTypes} from 'react';
import {getDate} from '../utils/forecastHelpers';

const styles = {
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

function DayItem({weatherData, handleClick}) {
    const icon = './app/images/weather-icons/' + weatherData.weather[0].icon + '.svg';
    const unixTimestamp = weatherData.dt;

    return (
        <div style={styles.container} onClick={handleClick}>
            <img src={icon} style={styles.img} />
            <span className="h3" style={styles.label}>{getDate(unixTimestamp)}</span>
        </div>
    );
}

DayItem.propTypes = {
    weatherData: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default DayItem;