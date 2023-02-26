import React from 'react';
import Style from '../Input_Docs/InputBox.module.css'

const InputBox = () => {
    return ( 
        <div>
            <input type="text" placeholder='Input Text' />
            <button type="button" className={Style.button_style}>ADD</button>
        </div>
     );
};

export default InputBox;