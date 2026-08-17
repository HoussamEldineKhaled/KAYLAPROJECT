import Navbar from "./Navbar"
import title from './assets/kas-extras-wordmark.png'
import './Home.css'
import React, { useEffect, useState } from "react"
import Foot from "./foot"

function Home() {
    
    const modules = import.meta.glob( "./assets/homepage-photos/*.{jpg,jpeg,png,webp}", {eager : true});
    const images = Object.values(modules).map(module => module.default);
    console.log('images:', images);
    return(
    <div className="homepage-principle">
        <Navbar />
        <div className="homepage-detail">
            <div className="logo-buttons" style={{gridArea:'box-1'}}>
                <img src={title}/>
                <div className="names-titles">
                    <h5 className="client-name">Kayla Slocumb</h5>
                    <p className="client-titles">Post-Production Artist • Editor • Sound Designer • Colorist</p>
                </div>
                
                <button className="to-about-me"><h3>Meet the Artist</h3></button>
            </div>
            <div className="editing-reel-container" style={{gridArea:'box-2'}}>
                <div className="editing-reel-title"><span className="red-dot"></span><p className="reel-title"> Featured Reel </p></div>
                <div className="video-frame">
                    <video>
                        <source></source>
                    </video>
                </div>
                <button className="projects-button"><h4>Watch the Projects</h4></button>
            </div>
            <div className="photo-container" style={{gridArea: 'box-3'}}>
                <h1>On set, in the timeline, and somewhere between the magic.</h1>
                <div className="photo-gallery">
                    {images.map((image, i) =>  <img className="photo-list" key={i} src={image} alt="Images of set work"/>)}
                </div>
            </div>
            
        </div>
        <Foot/>
    </div>
    )
}

export default Home