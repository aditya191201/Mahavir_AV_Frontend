import React from 'react'
import { useNavigate } from 'react-router-dom';
import './solcard.css';

const SolCard = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/solutioncategory")
    }

    return (
        <div className='solution' >
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>

            <a onClick={handleClick} class="card education" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Conference1.jpg' />
                </div>

                <p>Boardrooms & Conference Room</p>
            </a>
            <a onClick={handleClick} class="card credentialing" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Zoom.jpeg' />
                </div>
                <p>Zoom & Cloud Video Conferencing</p>
            </a>

            <a onClick={handleClick} class="card wallet" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Digital_Signage.jpeg' />
                </div>

                <p>Digital Signage & Video Wall</p>
            </a>

            <a onClick={handleClick} class="card human-resources" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/auditorium.jpg' />
                </div>
                <p>Auditorium & Town Hall</p>
            </a>
        </div>
    )
}

export default SolCard;