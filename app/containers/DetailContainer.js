import React, {Component} from 'react';
import Detail from '../components/Detail';

class DetailContainer extends Component {
    render () {
        return (
            <Detail weatherData={this.props.location.state.weatherData} city={this.props.routeParams.city}/>
        );
    }
}

export default DetailContainer;