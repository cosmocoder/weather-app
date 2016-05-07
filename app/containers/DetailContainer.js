var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <Detail weatherData={this.props.location.state.weatherData} city={this.props.routeParams.city}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = DetailContainer;