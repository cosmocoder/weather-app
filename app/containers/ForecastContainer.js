var React = require('react');
var Forecast = require('../components/Forecast');
var weatherAPI = require('../utils/weatherAPI');

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
        weatherAPI.getWeatherForecast(city)
            .then(function(data) {
                this.setState({
                    isLoading: false,
                    forecastData: data.list
                });
            }.bind(this));
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

module.exports = ForecastContainer;