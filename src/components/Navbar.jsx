import { useState } from "react";
import styles from './Navbar.module.css'

function Navbar(){
    const [open, setOpen] = useState(false)

    return(
    <nav className="navbar">
        <a href="/">
            Logo and Site name goes here
        </a>
        <ul>
            <li><a href="/"></a></li>
            <li><a href="/"></a></li>
            <li><a href="/"></a></li>
            <li><a href="/"></a></li>
        </ul>

    </nav>);
}

export default Navbar;