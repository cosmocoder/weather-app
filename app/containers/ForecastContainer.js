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
        weatherAPI.getWeatherForecast(this.props.routeParams.city)
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
        var forecastItems = [];

        if (!this.state.loading) {
            forecastItems = this.state.forecastData.map(function(obj, index) {
                return (
                    <Forecast handleClick={this.handleClick.bind(this, obj)} weatherData={obj} key={index} />
                );
            }.bind(this));
        }

        return (
            this.state.isLoading ?
            <h1 className="text-center" style={{fontSize: '65px'}}>Loading...</h1>
            :
            <div className="container">
                <h1 className="text-center" style={{fontSize: '65px'}}>{this.props.routeParams.city}</h1>

                <h2 className="text-center">Select a day</h2>

                <div className="forecast-items">
                    {forecastItems}
                </div>
            </div>
        );
    }
});

module.exports = ForecastContainer;