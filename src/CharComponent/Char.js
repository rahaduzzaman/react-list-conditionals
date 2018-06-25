import React from 'react';
import './Char.css';

const char = (props) => {
    return(
        <div onClick={props.click} className="letter-box">
            {props.charecter}
        </div>
    )
};

export default char;