import React, {Component, PropTypes} from 'react';
import GetCity from '../components/GetCity.js';

class GetCityContainer extends Component {
    constructor () {
        super();
        this.state = {
            city: ''
        };
    }

    handleUpdateCity (e) {
        this.setState({
            city: e.target.value
        });
    }

    handleSubmitCity (e) {
        e.preventDefault();

        this.context.router.push('/forecast/' + this.state.city);
    }

    render () {
        return (
            <GetCity
                city={this.state.city}
                inline={this.props.inline}
                label={this.props.label}
                placeholder={this.props.placeholder}
                buttonText={this.props.buttonText}
                onUpdateCity={(event) => this.handleUpdateCity(event)}
                onSubmitCity={(event) => this.handleSubmitCity(event)}
            />
        );
    }
}

GetCityContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

GetCityContainer.propTypes = {
    inline: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string
};

GetCityContainer.defaultProps = {
    inline: false,
    label: 'Enter city and state',
    placeholder: 'Kolkata, West Bengal',
    buttonText: 'Get Weather'
};

export default GetCityContainer;