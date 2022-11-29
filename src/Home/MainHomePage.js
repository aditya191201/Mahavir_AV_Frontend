import React from 'react'

import Main from './Main';
import "./MycssSZ.css";
import SolCard from './SolutionCard';
import Videotxt from './videotxtSZ';
import "./solncontent.css";
import Counter from './Counter';
// import Footer from '../FooterPage/Footer';
// import Counter from './Counter';
import Animate2 from './Animate2';
import ContentSZ from './content-home';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Brightness1 } from '@material-ui/icons';
import url from '../Url';
import Footer from '../FooterPage/Footer';
function Home1() {
  const navigate = useNavigate()
  const [homeCover, setHomeCover] = useState([])
  const [isHomeCoverFetched, setIsHomeFetched] = useState(false)
  useEffect(() => {
    if (!isHomeCoverFetched) {
      axios.get(url+"/getAchievements").then(function (response) {
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
  return (
    <>

      <Navbar />
      <Main />
      <Videotxt />
      <Animate2 />



      <ContentSZ />

      <div style={{ backgroundImage: `url("https://images.pexels.com/photos/8761523/pexels-photo-8761523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, marginTop: 50 }}>
        <h1 className="soln-content">Solutions</h1>
        <SolCard />
      </div>

      <div style={{ marginTop: 50 }}>
        <h1 className='head-content'>Our Growth</h1>
        <Counter />
      </div>

      <div className='product-home' style={{ backgroundImage: `url("https://images.pexels.com/photos/8761523/pexels-photo-8761523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, opacity: 0.9 }}>
        <h1 className="soln-content">Products</h1>
        <SolCard />
      </div>
      <div>
        <h1 className="soln-content" style={{ marginBottom: 50, color: "black" }}>Awards & Achievements</h1>
        <div className='photos'>
          {/* <div>
                    <img src='https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </div>
                    <div>
                    <img src='https://images.pexels.com/photos/8348624/pexels-photo-8348624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                    </div>
                    <div>
                    <img src='https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                    </div> */}
          {homeCover.map(cover => (
            <div>
              <img src={cover.achievementImg} alt="" />
            </div>
          ))}


        </div>

      </div>

      <div>
        <Footer/>
      </div>

    </>


  )
}

export default Home1; 