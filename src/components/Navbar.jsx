import { useState } from "react";
import './Nav.css'
import logo from './assets/kas-extras-wordmark.png'
function Navbar(){
    const [open, setOpen] = useState(false)

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
            <li><a href="/">About Me</a></li>
            <li>
            <a href="/">
                More navs to be added
            </a>
            </li>
            <li><a href="/">Contact Me</a></li>
        </ul>

    </nav>);
}

export default Navbar;