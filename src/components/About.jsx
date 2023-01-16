const About=(props)=>{
    let mystyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'black':'white',
      borderColor:props.mode==='dark'?'white':'black'
     
    }
      return(
          <div  style={mystyle}  className="container" >
           <h1 >About Us</h1>
              <div className="accordion " id="accordionExample">
             
    <div className="accordion-item " >
   
      <h2 className="accordion-header" id="headingOne">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
  <strong>Analyze your Text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header" id="headingThree">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibilty</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
      </div>
    </div>
  </div>
          </div>
      )
  }
  export default  About