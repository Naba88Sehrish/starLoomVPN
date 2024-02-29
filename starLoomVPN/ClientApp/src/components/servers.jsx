import ScrollButton from './ScrollButton';
import Footer from './Footer';
import './index.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Main';

const Servers= () => {
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
        <div className="background-div" style={{  marginTop: "70px" }}>
        <div className="Hero-container" style={{ padding: "80px" }}>
            <div className="text-section">
                    <h2>Choose Your Ideal Server Location</h2>
                    <p style={{ paddingTop: "15px" }}>At StarLoom VPN, we understand the importance of speed, which is
                        why we've invested in over 100 servers across 45+ countries to deliver
                        lightning-fast connections to our customers.<br></br>
                        Our servers utilize the latest encryption and security protocols, providing
                        our customers with the ultimate protection for their online activities.</p>
                    <Link to="/Download"> <button className="btn2" >
                        <div className="Hero-container" style={{ justifyContent: "flex-start" }} >  <p style={{ textAlign: "center", color:"black",marginTop:"15px",marginRight:"15px"}}>Get Started</p> <img src="/images/icon_start.png" alt="heroimage" /></div></button></Link>
            </div>
            <div className="image-section">
                    <img className="img-fluid" src="/images/image.png" alt="heroimage" />
            </div>
        </div></div>
        <h1 style={{ padding: "20px",textAlign:"center" }}>Find your server</h1>
        <p style={{ textAlign: "center", color:"#FF6400" }} >Unsure on how to use the VPN app? Search for your answer in our support center or in the categories below.</p>
        <img className="img-fluid mx-auto d-block" style={{ width: "1000px",height:"auto" ,justifyContent:"center"}} src="/images/server_1.png" alt="heroimage" />
        <div className="background-div" style={{  marginTop: "70px" }}>
            <h3 style={{ textAlign: "center" ,paddingTop: "70px" }}>Connect to Our VPN Servers in a Few Easy Steps</h3>
            <p style={{ textAlign: "center" }}>Follow these simple steps and get a powerful VPN in just a few minutes.</p>
        <div className="card-container">
            <div className="card">
                <div className="Hero-container" style={{ justifyContent: "center" }} >  <h3 style={{ textAlign: "center", marginRight: "20px", color: "#FF6400" }}>Step 1: </h3> <img src="/images/icon_start.png" alt="heroimage" /></div>
            
                <h5 style={{ textAlign: "center" }}>Subscribe and Download the
                    Client</h5>
                <p>Pick the most suitable subscription
                    plan and get the app for your device.</p>
            </div> <div className="card">
                <div className="Hero-container" style={{ justifyContent: "center" }} >  <h3 style={{ textAlign: "center", marginRight: "20px", color: "#FF6400" }}>Step 2: </h3> <img src="/images/icon_start.png" alt="heroimage" /></div>

                <h5 style={{ textAlign: "center" }}>Run VPN and Connect to
                    a Server</h5>
                <p>Pick a server from 2,500+ units in 89
 available locations.</p>
            </div> <div className="card">
                <div className="Hero-container" style={{ justifyContent: "center" }} >  <h3 style={{ textAlign: "center", marginRight: "20px", color: "#FF6400" }}>Step 3: </h3> <img src="/images/icon_start.png" alt="heroimage" /></div>

                <h5 style={{ textAlign: "center" }}>Browse Safely</h5>
                <p style={{ marginBottom: "35px" }}>Connect to StarLoom VPN and enjoy a secure
                    Internet connection.</p>
            </div>
           
        </div><div className="box-container" style={{ justifyContent: "space-around" }} ><Link to="/Login"> <button className="btn1 " >Get VPN</button></Link>

            </div></div>
        <h3 style={{ textAlign: "center", paddingTop: "70px" }}>The Fastest Servers for the Best Experience</h3>
        <p style={{ textAlign: "center" }}>Get the speed you deserve and so much more. VeePN allows you to access your favorite content with no speed
            loss or limits.</p>
        <div className="Hero-container" style={{ padding: "80px" }}>
            <div className="text-section">
                <h4>Personal servers:</h4>
                <p style={{ paddingTop: "10px" }}>Set up your own VPN server in a needed location and access it with VeePN in just a few clicks. Quickly manage and switch between multiple proxies in our app.</p>
                <h4>Limitless content access:</h4>
                <p style={{ paddingTop: "10px" }}> It always feel insulting to get the “Sorry, the content is not available in your country” message. Thanks to VeePN, it will never spoil your day again. The Internet is now wide open for you.</p>
                <h4>Comfortable content streaming:</h4>
                <p style={{ paddingTop: "10px" }}>StarLoom gives you the pleasure of smooth streaming and watching content without any annoying glitches.</p>

            </div>
            <div className="image-section">
                <img className="img-fluid" src="/images/description_vpn_servers_2_e9f4032e_1.png" alt="heroimage" />
            </div>
        </div>
        <ScrollButton />
        <Footer />
           </>

    );
};

export default Servers;