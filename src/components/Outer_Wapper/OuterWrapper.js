import React from 'react';
import Title from '../Title/Title';
import Style from '../Outer_Wapper/OuterWrapper.module.css'
import InputBox from '../Input_Docs/InputBox';
import WorkRecord from '../WorkRecord/Work_Record';

const OuterWrapper = () =>  {
    return ( 
        <div className={Style.outer}>
            <Title></Title>
            <InputBox />
            <WorkRecord />
        </div>
    );
};

export default OuterWrapper;