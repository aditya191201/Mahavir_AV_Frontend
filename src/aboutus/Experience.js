import './Experience.css';
import years from './pexel.jpg'
import React from 'react';
const Experience=()=>{
    return (
    <>
        <div class=" grid lg:grid-cols-2 ExperienceGrid">
            <div class=" centered md:auto">
                <img className="years-experience"src={years}/>
            </div>
            <div class=" centered md:auto">
                <h1 class="text-experience"> 7+ Years of Quality AV Experiences in Pune</h1>
                <p class="content-exerience">
                    Mahavir AV Solutions is leading the market in <br></br>providing
                    audio-visual and other collaboration solutions.
                    <br></br>Serving AV industry since 2015, <br></br>we aim at providing
                    end-to-end solutions to all our customers and enhance the
                    functionality of the workspaces.Our parent company,
                    Mahavir Electronics and Furniture
                    has been catering to household and commercial demands
                    and serving customers for over 37 years.
                </p>
            </div>
        </div>
    </>
    );
};
export default Experience;