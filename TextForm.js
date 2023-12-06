import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text!", "success");
    }
    const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Removed Extra spaces!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
   
    return (
        <div>
            <div className='container'style= {{color : props.mode === 'dark'? 'white':'black' }}>
            <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                     <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor : props.mode === 'dark'? '#13466e': 'white', color :  props.mode === 'dark'? 'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <button disabled = {text.length === 0} onClick={handleUpClick} className='btn btn-info mx-3 my-3'>Convert to uppercase</button>
                <button disabled = {text.length === 0} onClick={handleLowClick} className='btn btn-info mx-3 my-3'>Convert to lowercase</button>
                <button disabled = {text.length === 0} onClick={handleClear} className='btn btn-info mx-3 my-3'>Clear</button>
                <button disabled = {text.length === 0} onClick={handleExtraSpaces} className='btn btn-info mx-3 my-3'>Remove Extra Spaces</button>
            </div>
            <div className='container my-3'style= {{color : props.mode === 'dark'? 'white':'black' }}>
                <h2 >Your text summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length}characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0? text : 'Nothing to preview.'}</p>
                </div>
        </div>
    )
}
