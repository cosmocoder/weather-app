var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
    return (
        <form className={props.inline ? 'form-inline' : ''} onSubmit={props.onSubmitLocation}>
            <div className="form-group">
                <label className="sr-only">{props.label}</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.location}
                    onChange={props.onUpdateLocation}
                />
            </div>

            <button type="submit" className="btn btn-success">{props.buttonText}</button>
        </form>
    );
}

GetCity.propTypes = {
    inline: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    location: PropTypes.string,
    buttonText: PropTypes.string,
    onUpdateLocation: PropTypes.func.isRequired,
    onSubmitLocation: PropTypes.func.isRequired
};

module.exports = GetCity;