var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Header = require('../components/Header');
require('../main.css');

var Hello = React.createClass({
    render: function() {
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
});


module.exports = Hello;