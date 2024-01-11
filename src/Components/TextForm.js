import React, { useState } from 'react'

// State refers to an object that represents the internal data of a component. The state of a component can change over time due to user interactions, data fetching, or other events. React components can have state, and when the state changes, the component will re-render to reflect those changes in the user interface.

export default function TextForm(props) {
    // to make text as Uppercase
    const handleUpClick = () => {
        // console.log("Button is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase","success");
    }

    const handleLoClick = () => {
        // console.log("Button is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase","success");
    }

    const handleReverseClick = () => {
        // console.log("Button is clicked");
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed text","success");
    }

    const handleSortClick = () => {
        // console.log("Button is clicked");
        let newText = text.split('').sort().join('');
        setText(newText);
        props.showAlert("Sorted text","success");
    }

    const handleSearchReplaceClick = () => {
        let search=prompt("Enter word for search ");
        let replace=prompt("Enter word to be replaced with ");
        let newText = text.replace(search, replace);
        setText(newText);
        props.showAlert("Searched & replaced text","success");
    }

    const handleOnChange = (event) => {
        // console.log("Change is clicked");
        // allows user to change the value of text => default value + user's text
        // If you don't include this & the associated event handle(onChange) in your code, the input field will not be connected to the text state.
        setText(event.target.value);
    }

    // 1. split the text by one or more spaces, and join(' ') is used to join the resulting array into a string with single spaces between words

    // 2. filter is function creates a new array containing only those words for which the condition word !== '' is true
    // This condition filters out any empty strings resulting from consecutive spaces in the original text.

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/).join(' ');
        setText(newText);
        // let newText = text.split(' ').filter(word => word !== '').join(' ');
        // setText(newText);
        props.showAlert("Removed extra spaces from text","success");
    }

    // react itself watch this state elements
    // useState is hook helps to make a state variable
    const [text, setText] = useState('')

    // text: variable that holds the current state value
    // setText: a function that you can use to update the state value, when you call setText(newValue) text="newValue" => Not Acceptable
    // setText('New Text'); => Acceptable
    
    return (
        <>
        {/* ,color: props.colorMode === 'pink'?'white':'black' */}
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <label for="myBox" class="form-label"><h1>{props.heading}</h1></label>
                {/* you can't change text of textarea as specified by value = {text} */}
                {/* <textarea className="form-control" id="myBox" onChange={handleChange} value={text} rows="7"></textarea> */}
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode === 'dark'?'white':'rgb(43 42 42)',backgroundColor: props.colorMode === 'pink'?'rgb(207 125 186)':'white',color: props.colorMode === 'pink'?'white':'rgb(43 42 42)'}} value={text} rows="7"></textarea>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleReverseClick}>Reverse text</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleSortClick}>Sort text</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleSearchReplaceClick}>Search & replace text</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            {/* color: props.mode === 'dark'?'white':'rgb(43 42 42)', */}
            {/* ,color: props.colorMode === 'pink'?'white':'black' */}
            <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                {/* The split() method splits a string into an array of substrings.
                The split() method returns the new array.
                The split() method does not change the original string. */}
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} minutes read</p>
            </div>
        </>
    )
}
