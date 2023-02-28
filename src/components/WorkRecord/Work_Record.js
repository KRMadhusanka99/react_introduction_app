import React from 'react';
import Style from './WorkRecord.module.css';

const WorkRecord = (props) => {
    return ( 
        <div className={Style.outer_div}>
            <input type="checkbox" />
            <h3>{props.title}</h3>
            <button className={Style.button_style} type="button">Del</button>
        </div>
     );
};

export default WorkRecord;