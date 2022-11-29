import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ContactSection.css';
import '../Solcat/solcat.css';
export default function ContactSection() {
  return (
    <>
    <Navbar/>
    {/* <div class="alert-success">
      <span>Message Sent! Thank you for contacting us.</span>
    </div> */}
    {/* <div class="alert-error">
      <span>Something went wrong! Please try again.</span>
    </div>
     */}
    <div class="contact-main">
    <div class="contact-section">
      <div class="contact-info">
        <div className='categoryh1'><h1>Contact Us</h1></div>
        <div><i class="fas fa-map-marker-alt"></i>Mahavir AV Solutions,Bibwewadi,Pune</div>
        <div><i class="fas fa-envelope"></i> <a href="mailto:mahaviravsolutions@gmail.com?subject=Mail">mahaviravsolutions@gmail.com</a></div>
        <div><i class="fas fa-phone fa-flip-horizontal"></i> <a href="tel:0712-232435">0712-232435</a></div>
        <div><i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div class="contact-form">
        <div className='categoryh1'><h1>Enqiry</h1></div>
        <form class="contact" action="" method="post"/>
          <input type="text" name="name" class="text-box" placeholder="Your Name" required/>
          <input type="email" name="email" class="text-box" style={{marginLeft:20}}placeholder="Your Email" required/>
          <textarea name="message" rows="5" placeholder="Your Message" required/>
          <input type="submit" name="submit" class="send-btn" value="Send"/>
       
      </div>
    </div>
    </div>
    
    
    {/* <Footer/> */}
    </>
  );
}