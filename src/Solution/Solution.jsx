import React from 'react'
import './Solution.css'
import Feature from './FeatureCards';
import Card from './BenefitCard';
import axios from 'axios';
// import ImplSlider from './Sol-implementation';
import Carousel from './Available_implementation_Carousel';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import './BenefitCard.css';
import { useEffect } from 'react';
import './FeatureCards.css'
import './benefit-card-comp.css'
import styles from "../aboutus/Picture.module.css";
import '../Solcat/solcat.css';
import url from '../Url';
import Footer from '../FooterPage/Footer';
import PopUp_Sol from './PopUp_Sol';
import ProductsUsed from './Products_Used';

function Solution() {
   const [solution, setSolution] = useState([])
   const [isSolutionFetched, setIsSolutionFetched] = useState(false)
   useEffect(() => {
      window.scrollTo(0, 0);
      if (!isSolutionFetched) {
         axios.get(url + "/getSolutions/" + localStorage.getItem('solname')).then(function (response) {
            if (response.status == 200) {
               setSolution(response.data)
               setIsSolutionFetched(true)
               //  localStorage.setItem("solution",solution)
               console.log(response.data)
               console.log("solution", solution)
            }
         }).catch(function (error) {
            console.log("error", error)
         })
      }
      document.title = solution.title + " - MAVS"
   })
   
   localStorage.setItem("solutionName", solution.title)

   return (

      <>
         <Navbar />
         {/* <div>
            <Slider />
         </div> */}

         <article className={styles.article_abt_us}>
            <picture className={styles.picture} style={{ filter: "brightness(40%)" }}>
               <img src={solution.coverimg} alt="background" class="img-fluid" width={'100%'} />
            </picture>
            <h1 className={styles.header} width={'100%'}>{solution.title}</h1>
         </article>

         {(solution.description != "") ? (<>
            <section>

               <p className='About-Sol'>
                  {/* An immersive visual experience is the result of the use of the latest large screen display technologies — for high-contrast, high resolution images and video.
   Well integrated AV technology improves the quality of internal and external events involving a large number of stakeholders. */}
                  {solution.description}
               </p>
            </section>
         </>) : (null)}

         <br />
         {/* ,m */}
         <br />
         <div >




            <div>
               {
                  (solution.solutionFeatures != null) ? (
                     <>
                        <div className='categoryh1' style={{ marginBottom: 10 }}><h1>Features</h1></div>
                        <Feature /></>
                  ) : (null)
               }



               {/* <FCard image = {str1 }/> 
    <FCard image = {str2}/> 
    <FCard image = {str1}/> 
    <FCard image = {str2}/> */}
               {/* {
      solution.solutionFeatures.map((item) =>(
        // <h1>{item.name}</h1>
        <FCard image = {item.icon} description = {item.description} name = {item.name}/> 
      ))
    } */}

            </div>

            <div>

               {(solution.solutionBenefits != null) ? (
                  <>
                     <div className='categoryh1'><h1>Benefits</h1></div>
                     <Card />
                  </>

               ) : (null)}

            </div>
            <br />
            <div className="download-broucher">
               <PopUp_Sol />
            </div>
            <div>


            </div>


         </div>

         <ProductsUsed />
         {(solution.solimg1 == "" && solution.solimg2 == "" && solution.solimg3 == "") ? (null) : (<>
            <div className='categoryh1'><h1>Available Implementations</h1></div>
            {/*         
         <div className='Implementation'>
            <Slider />
         </div> */}
            {/* <div>
         <ImplSlider />
         </div> */}
            <div>
               <Carousel image1={solution.solimg1} image2={solution.solimg2} image3={solution.solimg3} />
            </div>
         </>)}

         <Footer/>

      </>


   )
}

export default Solution;