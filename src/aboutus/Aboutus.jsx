import React ,{ useEffect, useState }from 'react';
import './Aboutus.css';
import Picture from './Picture.js'
import Navbar from '../Navbar/Navbar.jsx'
import Experience from './Experience';
import Partners from './Partners';
import Footer from '../FooterPage/Footer';

function Aboutus(){
    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = 'About Us - MAVS'
    })
    return(
    <>
        <Navbar/>
        <div class="backgr-abt-us">
            <Picture/>
        </div>
        <section>
            <p class="content-abt-us">We believe in Providing you with a technologically-enabled
                workspace. That is why our long-term goals include
                reaching to every corner so that individuals, small
                companies, as well as multinational organizations
                can avail of our services. We are working to
                strengthen our services and offer tailor-made
                solutions to our clients. Put your trust on us and we
                promise to deliver.
            </p>
        </section>
        <Experience/>
        <section class="content-section" style={{backgroundColor: "#EFF0F6"}}>
            <p class="content-ownerinfo">At Mahavir AV Solutions, we prioritize all the services that
                we provide. We offer highly dependable maintenance
                programs that comprise full-service performance and
                maintenance of your audiovisual system and we assure
                you that your AV system will be working at its best. In order
                to ensure absolute customer satisfaction, we provide
                highly impressive after-sales services and this helps us to
                win the loyalty of our customers and obtain recurrent
                business opportunities from them.
                We are thoroughly equipped and prepared to cater to the
                highest level of demand of our customers and have
                designed different Service Level Agreements that include
                24/7 backup and support for their AV installations.
            </p>
            {/* <div class="content-ownername">
                <p >--Sushil Oswal</p>
                <h3 >CEO MAVS</h3>
            </div> */}
        </section>
        <Partners/>
        <div>
            <Footer/>
        </div>
    </>)
}
export default Aboutus;