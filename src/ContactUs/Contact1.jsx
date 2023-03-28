import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../FooterPage/Footer';
import Navbar from '../Navbar/Navbar';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact1.css';

const Contact1 = () => {
    const form = useRef();
    useEffect(()=>{
        window.scrollTo(0, 0);
        document.title = 'Contact Us - MAVS'
    })
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_tei42ii', 'template_tdiw0wt', form.current, 'q3-bs_rjke0pVJUD9')
            .then((result) => {
                console.log(result.text);
                toast('Email Sent Successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    e.target.reset();
            }, (error) => {
                console.log(error.text);
                console.log("error in sending email")
            });
    };



    return (
        <>
            <Navbar />
            <section className="contact1">
                <div className="contact1-heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact1-container">
                    <div className="contact1-row">
                        <div className="contact1-column">
                            <div className="contact1-widget">
                                <div className="contact1-widget-item">
                                    <div className="contact1-icon">
                                        <FontAwesomeIcon icon={faLocationDot} className="contact1-inner-icon" />
                                    </div>
                                    <div className="contact1-text">
                                        <h5>Address</h5>
                                        <p>Mahavir AV Solutions,Bibwewadi,Pune</p>
                                    </div>
                                </div>
                                <div className="contact1-widget-item">
                                    <div className="contact1-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="contact1-text">
                                        <h5>Contact Us</h5>
                                        <a href="tel:+91-9890202233">+91-9890202233</a>
                                    </div>
                                </div>
                                <div className="contact1-widget-item">
                                    <div className="contact1-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="contact1-text">
                                        <h5>Mail</h5>
                                        <a href="mailto:sushil@mahaviravsolutions.in?subject=Mail">sushil@mahaviravsolutions.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact1-column">
                            <div className="contact1-form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text" name="user_name" placeholder='Name' />
                                    <input type="email" name="user_email" placeholder='Email' />
                                    <textarea name="message" placeholder='Comment'></textarea>
                                    <button type='submit' value="send" className='site-btn'>Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="contact1-row">
                        <div className="map-column">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.0131346647406!2d73.86173156084944!3d18.47889898688256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa17bee014f%3A0x2f9294243a7e1db5!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1670477071145!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Footer />
        </>
    )
}

export default Contact1;