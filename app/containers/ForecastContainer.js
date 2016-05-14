import React, {Component} from 'react';
import Forecast from '../components/Forecast';
import {getWeatherForecast} from '../utils/weatherAPI';

class ForecastContainer extends Component {
    constructor () {
        super();
        this.state = {
            isLoading: true,
            forecastData: []
        };
    }

    componentDidMount () {
        this.makeApiRequest(this.props.routeParams.city);
    }

    componentWillReceiveProps (nextProps) {
        this.makeApiRequest(nextProps.routeParams.city);
    }

    makeApiRequest (city) {
        getWeatherForecast(city)
            .then(({list}) => (
                this.setState({
                    isLoading: false,
                    forecastData: list
                })
            ));
    }

    handleClick (data) {
        this.context.router.push({
            pathname: `/detail/${this.props.routeParams.city}`,
            state: {
                weatherData: data
            }
        });
    }

    render () {
        return (
            <Forecast
                handleClick={(data) => this.handleClick(data)}
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
                city={this.props.routeParams.city}
            />
        );
    }
}

ForecastContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ForecastContainer;