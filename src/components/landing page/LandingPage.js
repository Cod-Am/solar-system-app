import React from 'react'
import './LandingPage.css'
import background from './img/bg.gif'
const LandingPage = () => {
  return (
    <div className='landingpage'>
        <img 
            src={background}
            alt='not found'
            className='background'
        />
        <div className='landing_entry'>
          <h1 className='title'>SPACE ODYSSEY</h1>
          <button className='button'>Get Started</button>
        </div>

    </div>
  )
}

export default LandingPage