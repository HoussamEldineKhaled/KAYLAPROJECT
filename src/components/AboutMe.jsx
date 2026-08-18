import Navbar from "./Navbar";
import Foot from "./foot";
import "./About_Me.css"
import PersonalPhoto from "./assets/Personal-Photo.jpeg"



function AboutMe(){
    return(
    <div className="About-Me-principle">
        <Navbar/>
            <div className="title-section">
                <div className="about-me-title"><span className="red-dot"></span><p className="title">ABOUT ME</p></div>
                <div className="greeting"><h1>Hi I'm <span className="first-name">Kayla</span> <span className="last-name">Slocumb</span>.</h1></div>
                <div className="quick-description"><p>A Film and Television graduate from Savannah College of Art and Design’s Atlanta campus, building stories through editing, sound, color, and writing.</p></div>
            </div>
            <div className="personal-intro-section">
                <div className="photo-container" style={{gridArea : "box1"}}>
                    <img src={PersonalPhoto} alt="Personal Photo"/>
                    <h5>This is Me!</h5>
                </div>
                <div className="paragraph-container" style={{gridArea : "box2"}}>
                    <p>Hello! My name is Kayla Slocumb, and I’m a Film and Television graduate from Savannah College of Art and Design’s Atlanta campus. My main focus is video editing, sound design/mixing, color grading, and writing.</p>
                    <p>My passion began in high school when I took my first film class during my junior year. Over time, my love for film grew, and since coming to SCAD, I’ve gained hands-on experience both on set and off set during post-production, strengthening my creative and technical skills.</p>
                    <div className="quote">I truly believe post-production is where the magic happens.</div>
                    <p>In post, you can honor the director’s vision while also enhancing and expanding on it. That is the part I love: finding the rhythm, shaping the emotion, and helping the story become what it was always trying to be.</p>
                </div>
            </div>
        <Foot/>
    </div>);
}


export default AboutMe;