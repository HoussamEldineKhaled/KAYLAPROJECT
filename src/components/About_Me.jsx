import Navbar from "./Navbar";
import Foot from "./foot";
import "./About_Me.css"



function About_Me(){
    return(
    <div className="About-Me-principle">
        <Navbar/>
            <div className="title-section">
                <div className="about-me-title"><span className="red-dot"></span><p className="title">ABOUT ME</p></div>
                <div className="greeting"><h1>Hi I'm <span className="first-name">Kayla</span> <span className="last-name">Slocumb</span>.</h1></div>
                <div className="quick-description"><p>A Film and Television graduate from Savannah College of Art and Design’s Atlanta campus, building stories through editing, sound, color, and writing.</p></div>
            </div>
            <div className="personal-intro-section">
                <div className="photo-container">
                    <img />
                </div>
                <div className="paragraph-container">
                    <p></p>
                    <p></p>
                    <div className="quote"></div>
                    <p></p>
                </div>
            </div>
        <Foot/>
    </div>);
}


export default About_Me;