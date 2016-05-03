var React = require('react');
require('../main.css');

var Hello = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <header className="main-header">
                    <h1>Main.js Header!</h1>
                </header>

                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});


module.exports = Hello;