var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
    var buttonText = props.buttonText || 'Get Weather';

    return (
        <form className={props.inline ? 'form-horizontal' : ''}>
            <div className="form-group">
                <label className="sr-only">{props.label}</label>
                <input type="text" className="form-control" placeholder={props.placeholder}/>
            </div>

            <button type="submit" className="btn btn-success">{buttonText}</button>
        </form>
    );
}

GetCity.propTypes = {
    inline: PropTypes.bool.isRequired,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    buttonText: PropTypes.string,
};

module.exports = GetCity;