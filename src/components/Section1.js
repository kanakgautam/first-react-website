import React from 'react'
import Button from './Button'
import './Section1.css'

function Section1() {
    return (
        <div className='main-container'>
            {/* <video src='../videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default Section1
