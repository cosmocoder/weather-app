var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
    return (
        <form className={props.inline ? 'form-inline' : ''} onSubmit={props.onSubmitCity}>
            <div className="form-group">
                <label className="sr-only">{props.label}</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.city}
                    onChange={props.onUpdateCity}
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
    city: PropTypes.string,
    buttonText: PropTypes.string,
    onUpdateCity: PropTypes.func.isRequired,
    onSubmitCity: PropTypes.func.isRequired
};

module.exports = GetCity;