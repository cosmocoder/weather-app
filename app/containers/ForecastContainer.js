import React from 'react';
import Forecast from '../components/Forecast';
import {getWeatherForecast} from '../utils/weatherAPI';

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isLoading: true,
            forecastData: []
        };
    },

    componentDidMount: function() {
        this.makeApiRequest(this.props.routeParams.city);
    },

    componentWillReceiveProps: function(nextProps) {
        this.makeApiRequest(nextProps.routeParams.city);
    },

    makeApiRequest: function(city) {
        getWeatherForecast(city)
            .then(({list}) => (
                this.setState({
                    isLoading: false,
                    forecastData: list
                })
            ));
    },

    handleClick: function(data) {
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                weatherData: data
            }
        });
    },

    render: function() {
        return (
            <Forecast
                handleClick={this.handleClick}
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
                city={this.props.routeParams.city}
            />
        );
    }
});

export default ForecastContainer;