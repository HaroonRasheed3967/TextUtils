import React, {useState} from 'react'


export default function FormText(props) {
    const [text, setText] = useState("")


    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case.", "success")
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case.", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard.", "success")
    }



    const handleBold = () => {

        let textBox = document.getElementById('mybox')
        let bold = textBox.style;
        if (bold.fontWeight === '') {
            bold.fontWeight = 'bold'
            props.showAlert("Text is converted to bold.", "success")
        } else {
            bold.fontWeight = ''
        }
    }

    const handleItalic = () => {

        let textBox = document.getElementById('mybox')
        let italic = textBox.style;
        if (italic.fontStyle === '') {
            italic.fontStyle = 'italic'
            props.showAlert("Text is converted to italic.", "success")
        } else {
            italic.fontStyle = ''
        }
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed.", "success")
    }


    const handleClearCase = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared.", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <div className="mb-3">
                    <h1 className="mb-3">{props.heading}</h1>
                    <br />
                    <h5>Enter text here</h5>
                    <textarea className="form-control" style={{background: props.mode === 'light' ? 'white' : '#191919', color: props.mode === 'light' ? 'black' : 'white'}} id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>UpperCase</button>

                <button className="btn btn-primary mx-1" onClick={handleLoCase}>LowerCase</button>


                <button className="btn btn-primary mx-1" onClick={handleItalic}>Italic Text</button>

                <button className="btn btn-primary mx-1" onClick={handleBold}>Bold Text</button>

                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces
                </button>

                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary mx-1" onClick={handleClearCase}> Clear Text </button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{(text.split(" ").length - 1)} words and {text.length} characters</p>
                <p>{Math.floor((0.008 * text.split(" ").length - 0.008) % 60)} minutes {Math.floor(((0.008 * text.split(" ").length - 0.008) * 60) % 60)} seconds to read</p>
                <h2>Preview</h2>
                <p className='p-2' style={{
                    backgroundColor: props.mode === 'light' ? 'white' : '#191919',
                    border: `2px solid ${props.mode === 'light' ? 'white' : 'white'}`,
                    borderRadius: `5px`
                }}>
                    {text.length > 0 ? text : "Enter text in above box to preview here"}</p>
            </div>
        </>
    )
}

