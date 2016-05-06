var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var PropTypes = React.PropTypes;

function Header(props) {
    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6">
                        <h2>{props.text}</h2>
                    </div>

                    <div className="col-xs-6">
                        <div className="pull-right">
                            <GetCityContainer inline={true} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    text: PropTypes.string.isRequired
};

module.exports = Header;