import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to Uppercase","success")
    }
    const handleonChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleLowClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success")
    }
    const handleClearClick= ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleCopy= ()=>{
        var text = document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard","success")
    }
    const [text, setText] = useState('')
    // text = "new text" --> Wrong way to change the state
    // setText("new text") --> Correct way to change the state
    return (
        <>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example TextArea</label> */}
                <textarea id="myBox" cols="100" rows="10" className="form-content" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743',border: props.mode==='dark'?'1px solid white':'1px solid #042743'}} onChange={handleonChange} value={text}></textarea>
            </div>
                <button className="btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text to preview it here"}</p>
        </div>
        </>
  )
}
