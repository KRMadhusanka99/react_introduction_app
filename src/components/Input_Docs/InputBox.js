import React from 'react';
import Style from '../Input_Docs/InputBox.module.css'

// document.getElementById('textField').value //java script way to get a string

const InputBox = () => {
    //add a method to add button cllick
    const clickHandler = () =>{
        alert("Clicked");
    }
    
    return ( 
        <div className={Style.oute_div}>
            <input className={Style.input_style} type="text" placeholder='Input Text' />
            <button type="button" className={Style.button_style} onClick={clickHandler}>ADD</button>
        </div>
     );
};

export default InputBox;