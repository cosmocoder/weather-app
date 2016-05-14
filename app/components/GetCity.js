import React, {PropTypes} from 'react';

function GetCity({inline, label, placeholder, city, buttonText, onUpdateCity, onSubmitCity}) {
    return (
        <form className={inline ? 'form-inline' : ''} onSubmit={onSubmitCity}>
            <div className="form-group">
                <label className="sr-only">{label}</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={city}
                    onChange={onUpdateCity}
                />
            </div>

            <button type="submit" className="btn btn-success">{buttonText}</button>
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

export default GetCity;