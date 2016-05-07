var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <Detail weatherData={this.props.location.state.weatherData} city={this.props.routeParams.city}/>
        );
    }
});

module.exports = DetailContainer;