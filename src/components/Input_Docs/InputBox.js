import React,{useState} from 'react';
import Style from '../Input_Docs/InputBox.module.css'

// document.getElementById('textField').value //java script way to get a string

const InputBox = () => {

    const [typeWord,setTyepedWord] = useState('');

    //add a method to add button cllick
    const clickHandler = () =>{
        alert(typeWord);
    }

    // onChange={() => {console.log('typed')}} -> in line javascript
    // change it to function now
    const typeHandler = (event) =>{
        console.log(event.target.value);
        //typeWord = event.target.value;
        setTyepedWord(event.target.value);
    }

    return ( 
        <div className={Style.oute_div}>
            <input className={Style.input_style} type="text" placeholder='Input Text' onChange={typeHandler} /> 
            {/* <button type="button" className={Style.button_style} onClick={clickHandler}>{typeWord}</button> using usestate*/}
            <button type="button" className={Style.button_style} onClick={clickHandler}>Add</button>
        </div>
     );
};

export default InputBox;