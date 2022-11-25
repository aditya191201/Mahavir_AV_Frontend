import axios from 'axios'
import React, { useEffect, useState } from 'react'
import videoBg from '../assets/videoBg.mp4'

function Main(){
  const[homeCover, setHomeCover] = useState([])
  const[isHomeCoverFetched , setIsHomeFetched] = useState(false) 
  useEffect(()=>{
    if(!isHomeCoverFetched)
    {
      axios.get("http://localhost:8080/gethomecover").then(function(response){
        if(response.status == 200){
          setHomeCover(response.data)
          setIsHomeFetched(true)
          console.log(response.data)
          console.log("products" , homeCover)
        }
      }).catch(function(error){
        console.log("error",error)
      })
    }
  }) 
  return (
    <div className='main'>
        <div className="overlay"></div>
        {/* <video src={videoBg} autoPlay loop muted /> */}
        {homeCover.map(cover=>(
           <video src={cover.video} autoPlay loop muted /> 
        ))}
        
    </div>
  )
}

export default Main;
