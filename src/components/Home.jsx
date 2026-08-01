import Navbar from "./Navbar"
import title from './assets/kas-extras-wordmark.png'
import './Home.css'
import React from "react"
import Foot from "./foot"

function Home() {


    return(
    <div className="homepage-principle">
        <Navbar />
        <div className="homepage-detail">
            <div className="logo-buttons" style={{gridAreas:'box-1'}}>
                <img src={title}/>
                <h5 className="client-name">Kayla Slocumb</h5>
                <h7>Post-Production Artist</h7>
                <p className="client-titles">Editor • Sound Designer • Colorist</p>
                <button className="to-about-me">Meet the Artist</button>
            </div>
            <div className="editing-reel-container" style={{gridAreas:'box-2'}}>
                <p><span></span> Featured Reel</p>
                
            </div>
            <div className="photo-container" style={{gridArea: 'box-3'}}>
                <h1>On set, in the timeline, and somewhere between the magic.</h1>
                <div className="photo-gallery">
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>
            
        </div>
        <Foot/>
    </div>
    )
}

export default Home