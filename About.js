import React from 'react'

export default function About(props) {

        let myStyle = {
        color: props.mode === 'dark'? '8ACDD7' : '#042743',
        backgroundColor : props.mode === 'dark'? 'rgb (36 74 104)':'white' ,
    
    }

    return (
        <div className='container' style={{color: props.mode === 'dark'? '8ACDD7' : '#042743'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample"style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and effectively.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
                           TextUtils is a free character counter tool that provides instant character count & word count stats for a given text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
                         This word count software works in any browser such as firefox, Chrome, Internext Explorer, Safari, Opera etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
