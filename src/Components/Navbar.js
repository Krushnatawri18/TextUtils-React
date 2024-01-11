import React from 'react'
import PropTypes from 'prop-types'
// import { Link , NavLink} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* Props are read-only don't make any changes else it will return an error 
                {props.title="hii"} */}
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>

                        {/*            
                        <li className="nav-item">
                            <a className="nav-link" href="/About">{props.aboutText}</a>
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                             <NavLink to="/about">{props.aboutText}</NavLink> 
                        </li>
                        */}
                    </ul>
                    <div className={`form-check mx-3 form-switch text--${props.colorMode === 'pink' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleColorMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable PinkMode</label>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />&nbsp;
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// PropTypes is a mechanism in React used for type-checking props, which are the data that a component receives. It helps ensure that the components are receiving the expected data types, and it provides a form of documentation for component usage.

Navbar.propTypes = {
    // .isRequired: This part indicates that the prop is required. If a parent component does not provide this prop, React will issue a warning if default prop value is unset. 
    title: PropTypes.bool.isRequired,
    aboutText: PropTypes.string.isRequired,
}

// Default prop values in React are used to define default values for props in a component. These default values are used when a parent component does not provide a value for a particular prop. This helps ensure that a component can still function properly even if some props are not explicitly set by its parent.

Navbar.defaultProps = {
    title: 'Set a title',
    aboutText: 'Set a text',
};