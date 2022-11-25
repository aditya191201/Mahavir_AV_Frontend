import React from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faPlane,faListCheck, faPerson, faCloud, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './Growth1.css';
import growthv from '../assets/chart.mp4';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
           

                
            
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="counter-container">
            <div className="counter-row">
                <div className="counter-col">
                    <FontAwesomeIcon icon={faPerson} className="counter-icon"/>
                    <br />
                    {counterOn && <CountUp start={0} end={100} duration= {2} delay={0}/>}+
                    <h4 >Clients</h4>
                </div>
                <div className="counter-col">
                    <FontAwesomeIcon icon={faListCheck} className="counter-icon"/>
                    <br />
                    {counterOn && <CountUp start={0} end={50} duration= {2} delay={0}/>}+
                    <h4>Projects</h4>
                </div>
                <div className="counter-col">
                    <FontAwesomeIcon icon={faCloud} className="counter-icon"/>
                    <br />
                    {counterOn && <CountUp start={0} end={150} duration= {2} delay={0}/>}+
                    <h4>Solutions</h4>
                </div>
                <div className="counter-col">
                    <FontAwesomeIcon icon={faCartShopping} className="counter-icon"/>
                    <br />
                    {counterOn && <CountUp start={0} end={1000} duration= {2} delay={0}/>}+
                    <h4>Products</h4>
                </div>
                <div >
                         <video className="growthVid"src={growthv} autoPlay loop muted />
                </div>
            </div>
           
        </div>
        </ScrollTrigger>
        
        
        
        </>
    )
}

export default Counter;