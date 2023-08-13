import React, { useState } from 'react';
import './LandingPage.css';
import background from './img/bg.gif';

const LandingPage = () => {
  const [ishover, updateHover] = useState(false);

  const handleMouseEnter = () => {
    updateHover(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      updateHover(false);
    }, 2000);
  };

  return (
    <div className='landingpage'>
      <img 
        src={background}
        alt='not found'
        className='background'
      />
      <div className='landing_entry'>
        <h1
          className={`title ${ishover?'transition':'transition'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          SPACE ODYSSEY
        </h1>
        <button className={`button ${ishover ? 'buttonanimationon' : 'buttonanimationoff'}`}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;