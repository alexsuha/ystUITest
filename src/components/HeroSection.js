import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container' >
            <video src={window.location.origin + "/videos/video-2.mp4"} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className='btn' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        GET STARTED
                </Button>
                <Button 
                    className='btn' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        WATCH TRAILER<i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
