var React = require('react');
var Header = require('../components/Header');
require('../main.css');

var Hello = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <Header text="Clever Title" />

                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});


module.exports = Hello;