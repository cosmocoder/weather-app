import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DayItem from './DayItem';

var styles = {
    heading: {
        fontSize: '65px'
    }
};

function ForecastUI({forecastData, handleClick, city}) {
    var forecastItems = forecastData.map((item, index) => (
        <DayItem handleClick={handleClick.bind(null, item)} weatherData={item} key={item.dt} />
    ));

    return (
        <div className="container">
            <h1 className="text-center" style={styles.heading}>{city}</h1>
            <h2 className="text-center">Select a day</h2>

            <div className="forecast-items">
                {forecastItems}
            </div>
        </div>
    );
}

function Forecast({handleClick, isLoading, forecastData, city}) {
    return (
        <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            {
                isLoading ?
                <div className="container" key="loading">
                    <h1 className="text-center" style={styles.heading}>Loading...</h1>
                </div>
                :
                <ForecastUI
                    key="loaded"
                    city={city}
                    forecastData={forecastData}
                    handleClick={handleClick}
                />
            }
        </ReactCSSTransitionGroup>
    );
}

Forecast.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    forecastData: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired
};

export default Forecast;