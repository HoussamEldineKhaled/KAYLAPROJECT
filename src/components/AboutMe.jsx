import Navbar from "./Navbar";
import Foot from "./foot";
import "./About_Me.css"
import PersonalPhoto from "./assets/Personal-Photo.jpeg"



function AboutMe(){
    return(
    <div className="About-Me-principle">
        <Navbar/>
            <div className="title-section">
                <h1>Hi, I'm <span className="first-name">Kayla</span><br/><span className="last-name">Slocumb</span></h1>
                <h3>A Film and Television graduate from Savannah College of Art and Design’s Atlanta campus, building stories through editing, sound, color, and writing.</h3>
                <h6>Welcome to the About me page!!</h6>
            </div>
        <Foot/>
    </div>);
}


export default AboutMe;