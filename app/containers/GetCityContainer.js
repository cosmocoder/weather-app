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
            placeholder: 'St. George, Utah',
            buttonText: 'Get Weather'
        };
    },

    getInitialState: function() {
        return {
            location: ''
        };
    },

    handleUpdateLocation: function(e) {
        this.setState({
            location: e.target.value
        });
    },

    handleSubmitLocation: function(e) {
        e.preventDefault();

        this.context.router.push('/forecast/' + this.state.location);
    },

    render: function() {
        return (
            <GetCity
                location={this.state.location}
                inline={this.props.inline}
                label={this.props.label}
                placeholder={this.props.placeholder}
                buttonText={this.props.buttonText}
                onUpdateLocation={this.handleUpdateLocation}
                onSubmitLocation={this.handleSubmitLocation}
            />
        );
    }
});

module.exports = GetCityContainer;