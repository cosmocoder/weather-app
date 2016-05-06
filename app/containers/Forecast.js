var React = require('react');
var weatherAPI = require('../utils/weatherAPI');

var Forecast = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isLoading: true
        };
    },

    componentDidMount: function() {
        weatherAPI.getWeatherForecast(this.props.routeParams.city)
            .then(function(data) {
                this.setState({
                    isLoading: false
                });
                console.log(data);
            }.bind(this));
    },

    render: function() {
        return (
            this.state.isLoading ?
            <h1 className="text-center">Loading...</h1>
            :
            <div className="container">
                <h1 className="text-center">Forecast Component</h1>
            </div>
        );
    }
});

module.exports = Forecast;