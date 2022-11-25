import React from "react";
import Animate1 from './Animate1';
import Gif1 from './gif-1';
import Animegif from '../assets/Anime1.mp4';
import toon1 from '../assets/open.mp4';
import toon2 from '../assets/verify.mp4';
import toon3 from '../assets/cloud.mp4';
import toon4 from '../assets/tickmark.mp4';
import './Animate2.css';
import './Animations.css';
import './MycssSZ.css';
import './headcontent.css';
const Animate2=()=>{
    return(
        <>
            <div className="animation-container">
                {/* <h1 className="head-content">Our Qualities</h1> */}
                <div >
                    <Animate1/>
                </div>
                <div className="space-anime">

                </div>
                <div>
                <div className='gifs2' >
                            <div className='animedes1' >
                                <video src={toon1} autoPlay loop muted />
                            </div>
                            <div className='animedes1' >
                                <video src={toon2} autoPlay loop muted />
                            </div>
                    </div>
                    <div className='gifs2' >
                            <div className='animedes1' >
                                <video src={toon3} autoPlay loop muted />
                            </div>
                            <div className='animedes1' >
                                <video src={toon4} autoPlay loop muted />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Animate2;