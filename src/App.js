// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// multipage application => client sends request to remote server and it brings only specific files of html, css and js like google.com/about

// single page application => client sends request to remote server and it brings all the files of html, css and js and js will control the website like any clicking of button without reload

// let item = "Home";
// let iem = "<b>Home</b>";  => it will be seen as literal only bcoz react sanitize external HTML

// Components - 
// 1. class based component
// 2. function-based component
function App() {
    // state variable
    const [mode, setMode] = useState('light');
    const [colorMode, setColorMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(0 19 95)';
            showAlert("Dark mode has been enabled", "success");
            // setting title
            document.title = 'React App - Dark Mode';

            // setInterval(()=>{
            //     document.title="Install React App Now";
            // },2000)

            // setInterval(()=>{
            //     document.title="Install React Browser Now";
            // },1500)

        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            // setting title
            document.title = 'React App - Light Mode';
        }
    }

    const toggleColorMode = () => {
        if (colorMode === 'pink') {
            setColorMode('light');
            document.body.style.backgroundColor = 'white';
        }
        else {
            setColorMode('pink');
            document.body.style.backgroundColor = 'rgb(246, 77, 181)';
        }
    }

    // return only one element that is div if you want to return h1 with div then enclose return with <> and </> called as JSX fragement
    return (

        /*
        starting JSX compiled with 'Babel'
        {js code}
        class is replaced with className and for in html with htmlFor and tab index with tabIndex => camel case support
        <>
        <h1>Hii</h1>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React with Krushna
            </a>
          </header>
        </div>
        </>
        */

        <>
            {/* <nav>
                <li>{item}</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
            <div className="main">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor laboriosam possimus! Rem eaque commodi nemo quas debitis qui fuga, architecto excepturi, expedita error nostrum nulla vero sequi soluta enim dolorum neque provident adipisci?
            </div> 

            Props are called as properties that acts as arguments that passed into React components. */}
            {/* Used default prop values when we don't send props */}
            {/* <Navbar /> */}
            {/* <About /> */}

            {/* <Router>
                <Navbar mode={mode} colorMode={colorMode} title="ReactApp" aboutText="About Us" toggleMode={toggleMode} toggleColorMode={toggleColorMode} />
                <Alert alert={alert} />
                <div className="container my-3 ">
                    <Routes>
                        <Route exact path="/about"
                            element={<About />}>
                        </Route>
                        <Route exact path="/"
                            element={<TextForm heading="Enter the text to analyze" mode={mode} colorMode={colorMode} showAlert={showAlert} />}>
                        </Route>
                    </Routes>
                </div>
            </Router> */}

            <div className="container my-3">
                <Navbar mode={mode} colorMode={colorMode} title="ReactApp" aboutText="About Us" toggleMode={toggleMode} toggleColorMode={toggleColorMode} />
                <Alert alert={alert}/>
                <TextForm heading="Enter the text to analyze" mode={mode} colorMode={colorMode} showAlert={showAlert} />
            </div>

        </>
    );
}

export default App;
