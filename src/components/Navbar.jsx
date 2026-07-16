import { useState } from "react";
import './Nav.css'

function Navbar(){
    const [open, setOpen] = useState(false)

    return(
    <nav className="navbar">
        <a href="/">
            Logo and Site name goes here
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