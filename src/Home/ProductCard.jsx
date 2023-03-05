import React from 'react'
import { useNavigate } from 'react-router-dom';
import './solcard.css';

const ProductCard = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/productcategory")
    }

    return (
        <div className='solution' >
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>

            <a onClick={handleClick} class="card education" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Camera1.png' />
                </div>

                <p>Cameras</p>
            </a>
            <a onClick={handleClick} class="card credentialing" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Speaker.jpg' />
                </div>
                <p>Speakers</p>
            </a>

            <a onClick={handleClick} class="card wallet" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Microphone.png' />
                </div>

                <p>Microphones</p>
            </a>

            <a onClick={handleClick} class="card human-resources" style={{cursor: "pointer"}}>
                <div className='card-image1'>
                    <img src='https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/Home Page/Cables1.png' />
                </div>
                <p>Cables</p>
            </a>
        </div>
    )
}

export default ProductCard;