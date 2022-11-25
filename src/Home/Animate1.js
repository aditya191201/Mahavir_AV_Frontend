import React from 'react';
import Animegif from '../assets/conference.mp4'
import './Animations.css';

const Animate1 = () => {
  return (
    <div >
        <div className='animedes' >
            <video src={Animegif} autoPlay loop muted />
        </div>
        
        
    </div>
  )
}

export default Animate1;