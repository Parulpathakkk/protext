import { useState } from "react";

const TextForm = (props) => {
  let [text, setText] = useState("");
let premsg="Nothing to preview!"
  let upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  };
  let lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success")
  };
  let clearText = () => {
    setText("");
    props.showAlert("Cleared!" ,"success")
  };
  let copy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clipboard!","success")
  };
  let removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success")
  };
  let handleonChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container"  style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonChange}
            placeholder="Enter the text here"
            value={text}
            id="myBox"
            rows="6"
            style={{backgroundColor: props.mode==='dark'?'rgb(33,37,41)':'white',color: props.mode==='dark'?'white':'black' ,border:"1px solid grey"}}
          ></textarea>
        </div>
        <button
        style={{background:"#3C6255",borderStyle:"hidden", borderRadius:"3px"}}
          type="button"
          onClick={upperCase}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Uppercase
        </button>
        <button
          style={{background:"#3C6255",borderStyle:"hidden", borderRadius:"3px"}}
          type="button"
          onClick={lowerCase}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Lowercase
        </button>
        <button
          style={{background:"#3C6255",borderStyle:"hidden", borderRadius:"3px"}}
          type="button"
          onClick={clearText}
          className="btn btn-primary mx-1 my-1"
        >
          Clear Text
        </button>
        <button   style={{background:"#3C6255",borderStyle:"hidden", borderRadius:"3px"}} type="button" onClick={copy} className="btn btn-primary mx-1 my-1">
          Copy to Clipboard
        </button>
        <button
          style={{background:"#3C6255",borderStyle:"hidden", borderRadius:"3px"}}
          type="button"
          onClick={removeSpaces}
          className="btn btn-primary mx-1 my-1"
        >
          Remove extra spaces
        </button>
      </div>
      <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p >{text.length>0?text:premsg}</p>
      </div>
    </>
  );
};
export default TextForm;
