import { useState } from "react";
import './Nav.css'
import logo from './assets/kas-extras-wordmark.png'
function Navbar(){
    

    return(
    <nav className="navbar">
        <a href="/" className="Logo_Title">
                <img src={logo}/>
                <span>
                    <h3>KAS EXTRAS</h3>
                    <p>Kayla Slocumb</p>
                </span>
            
        </a>
        <ul>
            <li><a href="/">Home</a></li>
            <li className="projects"><a href="/">About Me</a></li>
            <li>
            <a href="/" >Projects ▾</a>
            <div className="content">
                <a href="/">Films</a>
                <a href="/">Sound Design</a>
                <a href="/">Color Grading</a>
            </div>
            </li>
            <li><a href="/">Contact Me</a></li>
        </ul>

    </nav>);
}

export default Navbar;