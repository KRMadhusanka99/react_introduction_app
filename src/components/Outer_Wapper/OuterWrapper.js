import React from 'react';
import Title from '../Title/Title';
import Style from '../Outer_Wapper/OuterWrapper.module.css'
import InputBox from '../Input_Docs/InputBox';

const OuterWrapper = () =>  {
    return ( 
        <div className={Style.outer}>
            <Title></Title>
            <InputBox />
        </div>
    );
};

export default OuterWrapper;