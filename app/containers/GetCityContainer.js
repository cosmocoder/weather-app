var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.js');

var GetCityContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },

    propTypes: {
        inline: PropTypes.bool,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        buttonText: PropTypes.string
    },

    getDefaultProps: function() {
        return {
            inline: false,
            label: 'Enter city and state',
            placeholder: 'Calcutta, West Bengal',
            buttonText: 'Get Weather'
        };
    },

    getInitialState: function() {
        return {
            city: ''
        };
    },

    handleUpdateCity: function(e) {
        this.setState({
            city: e.target.value
        });
    },

    handleSubmitCity: function(e) {
        e.preventDefault();

        this.context.router.push('/forecast/' + this.state.city);
    },

    render: function() {
        return (
            <GetCity
                city={this.state.city}
                inline={this.props.inline}
                label={this.props.label}
                placeholder={this.props.placeholder}
                buttonText={this.props.buttonText}
                onUpdateCity={this.handleUpdateCity}
                onSubmitCity={this.handleSubmitCity}
            />
        );
    }
});

module.exports = GetCityContainer;