import React from 'react';
import PropTypes from 'prop-types'; 

const SingleInput = (props) => (
    <div className="form-group">
        <label>{props.header}</label>
        <input className="form-control"
            value={props.content}
            onChange={props.onChange}
        /> 
    </div>
);

SingleInput.propTypes = {
    header:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SingleInput;