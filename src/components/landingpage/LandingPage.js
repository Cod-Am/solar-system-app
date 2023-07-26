import React from 'react';
import './LandingPage.css';
import Title from './Title/Title';

const LandingPage = () => {
  return (
    <div className='bg'>
      {/* title */}
      <div className='title'>
        <Title />
      </div>
      <div className='imgdiv'>
      <img src="https://cdna.artstation.com/p/assets/images/images/025/789/352/original/pixel-jeff-galaxy-far-far-away.gif?1586928273" alt='' className='img'/> 
      </div>
    </div>
  );
}

export default LandingPage;
