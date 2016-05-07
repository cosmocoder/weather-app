var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var PropTypes = React.PropTypes;
var DayItem = require('./DayItem');

var styles = {
    heading: {
        fontSize: '65px'
    }
};

function ForecastUI(props) {
    var forecastItems = props.forecastData.map(function(item, index) {
        return (
            <DayItem handleClick={props.handleClick.bind(null, item)} weatherData={item} key={item.dt} />
        );
    }.bind(this));

    return (
        <div className="container">
            <h1 className="text-center" style={styles.heading}>{props.city}</h1>
            <h2 className="text-center">Select a day</h2>

            <div className="forecast-items">
                {forecastItems}
            </div>
        </div>
    );
}

function Forecast(props) {
    return (
        <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            {
                props.isLoading ?
                <div className="container" key="loading">
                    <h1 className="text-center" style={styles.heading}>Loading...</h1>
                </div>
                :
                <ForecastUI
                    key="loaded"
                    city={props.city}
                    forecastData={props.forecastData}
                    handleClick={props.handleClick}
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

module.exports = Forecast;