import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ourteam.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../FooterPage/Footer';
import { useEffect } from 'react';
function OurTeam() {
    useEffect(()=>{
        document.title = 'Developers - MAVS'
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Navbar />
            <div className="team-body">
                <div className="team-row">
                    <h1>Our Developers</h1>
                </div>
                <div className="team-row">
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/siddhant.jpg" alt="" />
                            </div>
                            <h3>Siddhant Jain</h3>
                            <p>Backend Developer</p>
                            <div className="team-icons">
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.linkedin.com/in/siddhant-jain-8a3b3a198/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/Sidj26" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* column 2 */}
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/aditya_5.JPG" alt="" />
                            </div>
                            <h3>Aditya Deshpande</h3>
                            <p>Frontend Developer</p>
                            <div className="team-icons">
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.linkedin.com/in/aditya-deshpande-52789a191/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/aditya191201" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="mailto:deshpande.adu01@gmail.com?subject=Mail">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* column 3 */}
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/shyam.jpg" alt="" />
                            </div>
                            <h3>Shyam Aher</h3>
                            <p>Frontend Developer</p>
                            <div className="team-icons">
                                <a href="https://twitter.com/aher_shyam?t=bBPTsbrEJYPcuD72fvGJ5g&s=09" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.linkedin.com/in/shyam-aher-034434191" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/Shyam17360" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="mailto:shyamahernsk@gmail.com?subject=Mail">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* column 4 */}
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/tanvi.jpg" alt="" />
                            </div>
                            <h3>Tanvi Jagtap</h3>
                            <p>Frontend Developer</p>
                            <div className="team-icons">
                                <a href="https://twitter.com/TanviJagtap8" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.linkedin.com/in/tanvi-jagtap-6a0349196" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/tanvij30" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="mailto:tanvisj30@gmail.com?subject=Mail">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* column 5 */}

                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/shivam.jpg" alt="" />
                            </div>
                            <h3>Shivam Verma</h3>
                            <p>Backend Developer</p>
                            <div className="team-icons">
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.linkedin.com/in/shivam-verma-4859111a8/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/ShivamVerma380" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Column 6 */}
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-img">
                                <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/sejal.jpg" alt="" />
                            </div>
                            <h3>Sejal Zade</h3>
                            <p>Frontend Developer</p>
                            <div className="team-icons">
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="http://www.linkedin.com/in/sejal-zade-938478193" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/Sejal132001" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="mailto:sejalzade759agmail.com?subject=Mail">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default OurTeam;
