import React from 'react';
import './Animations.css';
import './headcontent.css';
import logoimg from '../FooterPage/logomavs.png';
import { GoLocation } from 'react-icons/go';
import { GoMail } from 'react-icons/go';
import { BiPhone } from 'react-icons/bi';
import { ImClock } from 'react-icons/im';
const Footer = () => {
  return (

    <div className='foot'>


      <div >
        <h1 className='leftside'>Useful Links</h1>
        <div className='foot-content'>
          <h2>About Us</h2>
          <h2>Products</h2>
          <h2>Solutions</h2>
          <h2>Contact Us</h2>
          <h2>Enquiry</h2>



        </div>

      </div>
      <div className='rightside'>
        <h1 className='leftside'>Important Links</h1>
      <div className='foot-content'>
        <h2>Terms And Conditions <br></br></h2>
        <h2>Privacy Policy <br></br></h2>
      </div>
        
      </div>
      <div className='endside'>
        <div className='logo-image'>
        <img src={logoimg} alt="logoimg"   ></img>
        </div>
        

        <br></br>
        <div className='icon-with-text'>
          <GoLocation color='white' size={'1.5rem'} />
          <p>&nbsp;&nbsp;Mahavir AV Solutions,Bibwewadi,Pune</p>

        </div>
        <br></br>
        <div className='icon-with-text'>
          <GoMail color='white' size={'1.5rem'} />
          <p>&nbsp;&nbsp;mahaviravsolutions@gmail.com</p>

        </div>
        <br></br>
        <div className='icon-with-text'>
          <BiPhone color='white' size={'1.5rem'} />
          <p>&nbsp;&nbsp;0712-232435</p>

        </div>
        <br></br>
        <div className='icon-with-text'>
          <ImClock color='white' size={'1.5rem'} />
          <p>&nbsp;&nbsp;Mon - Fri 8:00 AM to 5:00 PM</p>

        </div>
        <br></br>

      </div>
    </div>


  )
}

export default Footer;