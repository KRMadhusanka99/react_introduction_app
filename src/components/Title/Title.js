import React from 'react'; //rfc to generate a auto compononts
import Style from '../Title/Title.module.css'

const Title = () =>{
    return(
        <h1 className={Style.main_title}>Task Manager</h1>
    ); 
};

export default Title;