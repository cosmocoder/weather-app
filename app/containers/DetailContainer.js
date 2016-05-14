import React from 'react';
import Detail from '../components/Detail';

const DetailContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <Detail weatherData={this.props.location.state.weatherData} city={this.props.routeParams.city}/>
        );
    }
});

export default DetailContainer;