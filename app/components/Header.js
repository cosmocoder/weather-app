var React = require('react');
var GetCity = require('./GetCity');
var PropTypes = React.PropTypes;

function Header(props) {
    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6">
                        <h1>{props.text}</h1>
                    </div>

                    <div className="col-xs-6">
                        <div className="pull-right">
                            <GetCity inline={true} />
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