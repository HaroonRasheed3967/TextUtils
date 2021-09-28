import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {props.title}
                    </a>
                    {/* <Link className="navbar-brand" to="/">
                        {props.title}
                    </Link> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                                {/* <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link> */}
                            </li>
                            <li className="nav-item">

                                {/* <Link className="nav-link" to="/about">
                                    {props.aboutText}
                                </Link> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}
                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div> */}
                        <div className=''>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} mx-2 mt-1 mb-0 d-inline-block`}>
                                Enable Dark Mode
                            </p>
                            <button className='mx-1 pb-1'
                                onClick={props.toggleMode}
                                style={{
                                    height: '25px', width: '25px', backgroundColor: '#fff',
                                    border: `1px solid ${props.mode === 'light' ? 'grey' : 'white'}`, borderRadius: '50%'
                                }}>
                            </button>
                            <button className='mx-1 pb-1'
                                onClick={props.toggleMode}
                                style={{
                                    height: '25px', width: '25px', backgroundColor: '#111122',
                                    border: '1px solid white', borderRadius: '50%'
                                }}>
                            </button>
                            <button className='mx-1 pb-1'
                                onClick={props.toggleMode}
                                style={{
                                    height: '25px', width: '25px', backgroundColor: '#331122',
                                    border: '1px solid white', borderRadius: '50%'
                                }}>
                            </button>
                            <button className='mx-1 pb-1'
                                onClick={props.toggleMode}
                                style={{
                                    height: '25px', width: '25px', backgroundColor: '#114422',
                                    border: '1px solid white', borderRadius: '50%'
                                }}>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}


// default values if you don't set any values 
Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'Set Title Here'

}