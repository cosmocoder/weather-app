var React = require('react');

var DetailContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render: function() {
        console.log(this.props.location.state.weatherData);
        return (
            <div>Detail</div>
        );
    }
});

module.exports = DetailContainer;