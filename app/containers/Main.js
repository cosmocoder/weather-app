import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../components/Header';
import '../main.css';

class Hello extends Component {
    render () {
        return (
            <div className="main-container">
                <Header text="Clever Title" />

                <div className="main-content">
                    <ReactCSSTransitionGroup
                        transitionName="appear"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={600}>
                        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}


export default Hello;