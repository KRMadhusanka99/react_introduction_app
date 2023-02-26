import React from 'react';
import Title from '../Title/Title';
import Style from '../Outer_Wapper/OuterWrapper.module.css'

const OuterWrapper = () =>  {
    return ( 
        <div className={Style.outer}>
            <Title></Title>
        </div>
    );
};

export default OuterWrapper;