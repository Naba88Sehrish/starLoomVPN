import ScrollButton from './ScrollButton';
import Footer from './Footer';
import './index.css';
import React, { useState, useEffect } from 'react';
import Header from './Main';

const Support = () => {
    const [scrolled, setScrolled] = useState(false);
    //navbar animation
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); const navbarClasses = ['navbar', 'navbar-expand-sm', 'fixed-top'];
    if (scrolled) {
        navbarClasses.push('scrolled', 'animated');
    };
    return (<>
       <Header/>
        <div className="box-container"  >  <h2 style={{ marginTop: "120px" }}>Support Center</h2>
            <div className="line" style={{ backgroundColor: "white" ,width:"350px",height:"auto"}}></div><img
                src="/images/lines.png" alt="Icon" style={{ marginTop: "120px", width: "350px" }}></img></div>
        <p style={{ marginLeft: "170px",marginTop:"50px" }} >Unsure on how to use the VPN app? Search for your answer in our FAQ or Talk to human.</p>
        <h2 style={{ color: "#FF6400",textAlign:"center",marginTop:"50px" }} >For Talk To Human Contect us</h2>
        <div className="image-container" style={{ marginLeft: "80px", justifyContent: "center" }} >
            <img style={{ marginRight: "30px" }}
                src="/images/facebookVector.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/logos_google-gmail.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Gmail"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/logos_whatsapp-icon.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Whatsapp"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/skill-icons_instagram.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/skyp.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Skyp"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/twittericon.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"
                alt="Icon"
            ></img>
            <img style={{ marginRight: "30px" }}
                src="/images/icon _LinkedIn In_.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkdin"
                alt="Icon"
            ></img></div>
        <ScrollButton />
        <Footer />
           </>


    );
};

export default Support;