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
            <WorkRecord title = "Mahinda College"/>
            <WorkRecord title = "Bandaranayaka College"/>
            <WorkRecord title = "Royal College"/>
            <WorkRecord title = "Maliyadeva College"/>
        </div>
    );
};

export default OuterWrapper;