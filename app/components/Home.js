var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

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
        color: '#fff',
        marginTop: 0
    }
};

function Home() {
    return (
        <div style={styles.outerContainer}>
            <div className="container-fluid text-center" style={styles.innerContainer}>
                <h1 style={styles.heading}>Enter a City and State</h1>

                <GetCityContainer />
            </div>
        </div>
    );
}

module.exports = Home;