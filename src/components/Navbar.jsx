import { useState } from "react";
import styles from './Navbar.module.css'

function Navbar(){
    const [open, setOpen] = useState(false)

    return(
    <nav className={styles.Navigatoral}>
        <h3>We continue from here</h3>

    </nav>);
}

export default Navbar;