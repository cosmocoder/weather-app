var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
    return (
        <form className={props.inline ? 'form-inline' : ''}>
            <div className="form-group">
                <label className="sr-only">{props.label}</label>
                <input type="text" className="form-control" placeholder={props.placeholder}/>
            </div>

            <button type="submit" className="btn btn-success">{props.buttonText}</button>
        </form>
    );
}

GetCity.propTypes = {
    inline: PropTypes.bool,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    buttonText: PropTypes.string,
};

GetCity.defaultProps = {
    inline: false,
    label: 'Enter city and state',
    placeholder: 'St. George, Utah',
    buttonText: 'Get Weather'
};

module.exports = GetCity;