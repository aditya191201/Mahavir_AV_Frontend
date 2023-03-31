import React from "react";
import Animate1 from './Animate1';
import './Animate2.css';
import './Animations.css';
import './MycssSZ.css';
import './headcontent.css';
function Animate2({title, description}){
    return (
        <>
            <div className="animation-container">
                {/* <h1 className="head-content">Our Qualities</h1> */}
                
                {/* <div className="space-anime">

                </div>
                <div>
                    <div className='gifs2' >
                        <div className='animedes1' >
                            <video src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/assets/open.mp4" autoPlay loop muted />
                        </div>
                        <div className='animedes1' >
                            <video src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/assets/verify.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    <div className='gifs2' >
                        <div className='animedes1' >
                            <video src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/assets/cloud.mp4" autoPlay loop muted />
                        </div>
                        <div className='animedes1' >
                            <video src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/assets/tickmark.mp4" autoPlay loop muted />
                        </div>
                    </div>
                </div> */}
                <div style={{display:"block", marginTop:"80px"}}>
                    <div className="home-head1">
                        <h2>{title}</h2>
                    </div>
                    <br /> <br />
                    <div className="home-p1">
                        <p>{description}</p>
                    </div>
                </div>
                <div >
                    <Animate1 />
                </div>
            </div>
        </>
    )
}
export default Animate2;