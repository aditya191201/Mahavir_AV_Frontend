import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from '../Url';
import './contenthome.css';

function Videotxt() {
  const navigate = useNavigate()
  const [homeCover, setHomeCover] = useState([])
  const [isHomeCoverFetched, setIsHomeFetched] = useState(false)
  useEffect(() => {
    if (!isHomeCoverFetched) {
      axios.get(url + "/gethomecover").then(function (response) {
        if (response.status == 200) {
          setHomeCover(response.data)
          setIsHomeFetched(true)
          console.log(response.data)
          console.log("products", homeCover)
        }
      }).catch(function (error) {
        console.log("error", error)
      })
    }
  })
  function handleClick() {
    navigate('/aboutus')
  }
  return (
    <>
    {
      (homeCover[0] != null) ? (<>
      <div className='videotxt'>
          <p className='content-home-main'>
            {homeCover[0].description}
          </p>
        <div className='readmore' style = {{cursor:"pointer"}}>
          <a onClick={() => handleClick()}>Read More</a>
        </div>
      </div></>) : (null)
    }
      
    </>


  )
}

export default Videotxt;
