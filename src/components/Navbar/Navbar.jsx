import React from 'react';
import logo from './../../assets/logo.png';
import "./Navbar.css"
const Nav=()=>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="Logo"/>
                <p className="flash-logo-text">Typing Speed</p>

            </div>
            <div className="nav-right">
            <p className="nav-right-par">Arbaz Alam</p>

            </div>
        </div>
    )
}

export default Nav;