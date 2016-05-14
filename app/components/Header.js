import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import GetCityContainer from '../containers/GetCityContainer';

function Header({text}) {
    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6">
                        <h2>
                            <Link to="/">{text}</Link>
                        </h2>
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

export default Header;