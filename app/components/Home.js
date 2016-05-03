var React = require('react');
var GetCity = require('./GetCity');

var styles = {
    outerContainer: {
        height: '100%',
        backgroundImage: "url('app/images/pattern.svg')",
        backgroundSize: 'cover',
        position: 'relative'
    },

    innerContainer: {
        maxWidth: '600px',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        transform: 'translateY(-50%)'
    },

    heading: {
        fontWeight: 100,
        color: '#fff',
        marginTop: 0
    }
};

var Home = React.createClass({
    render: function() {
        return (
            <div style={styles.outerContainer}>
                <div className="container-fluid text-center" style={styles.innerContainer}>
                    <h2 style={styles.heading}>Enter a City and State</h2>

                    <GetCity label="Enter city and state" placeholder="St. George, Utah" />
                </div>
            </div>
        );
    }
});

module.exports = Home;