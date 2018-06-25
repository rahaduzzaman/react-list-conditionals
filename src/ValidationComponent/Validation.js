import React from 'react';
import './Validation.css';

const validation = (props) => {
    let remark,  className = 'danger' ;

    if (props.strLength < 5) {
        remark  = 'Text too short';
    } else if (props.strLength > 10) {
        remark = 'Text long enough';
    } else {
        remark = 'Good length';
        className = 'good';
    }

    return (
        <h3 className={className}>{remark}</h3>
    )
};

export default validation;