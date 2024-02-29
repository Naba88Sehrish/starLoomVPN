import ScrollButton from './ScrollButton';

import './index.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Pricing = () => {
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
    }
      
    
    return (<>
        <nav className={navbarClasses.join(' ')}>
            <nav className="navbar navbar-expand-sm  fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/Logo.png" alt="Logo" />
                    </Link>
                   
                    <div className="box-container"  >  <img
                        src="/images/small-lock.png" alt="Icon" ></img><p>Secured Checkout</p></div>
                </div>
            </nav> </nav>
        <div className="background-div"> <div className="box-container"  >  <img
            src="/images/blueTik.png" alt="Icon" style={{ marginTop: "120px" }}></img><p style={{ marginTop: "120px" }}>Subscription plan</p>
            <div className="line" style={{ backgroundColor: "black" }}></div><img
                src="/images/blackTik.png" alt="Icon" style={{ marginTop: "120px" }}></img><p style={{ marginTop: "120px" }}>Payment</p></div>
            <br></br> <div className="box-container"  >  <h5 style={{ marginTop: "30px" }}>Pick Your Subscription Plan.</h5>
                <div className="line1" style={{ backgroundColor: "#F1F1FF" }}></div><img
                    src="/images/30day.png" alt="Icon" style={{ marginTop: "30px",width:"50px",height:"auto" }}></img><p style={{ marginTop: "30px" }}>Money- back guarantee</p></div>
            <p style={{ marginLeft: "100px" }}>Take your digital security to the next level with StarLoom VPN.</p>
            <div className="card-container">
                
                <div className="card">
                    <p>24 Months</p>
                    <h5>USD 2.49/mo</h5> <img
                        src="/images/save69.png" alt="Icon" ></img>
                    <p>Billed $59.76 for the first 24 months,
                        then $59.76 every 12 months.</p>
                    </div>
                <div className="card">
                    <p>12 Months</p>
                    <h5>USD 3.99/mo</h5> <img
                        src="/images/savebtn.png" alt="Icon" ></img>
                    <p>Billed $47.88 for the first 12 months,
                        then $59.76 every 12 months.</p>
                    </div>
                <div className="card">
                    <p>1 Month</p>
                    <h5>USD 12.95/mo</h5> <img
                        src="/images/save69.png" alt="Icon" ></img>
                    <p>Billed $12.95 every month,
                        No discount.</p>
                </div> 
            </div><div className="box-container" style={{ justifyContent: "space-around" }} ><Link to="/Login"> <button className="btn1 " >Continue</button></Link>

            </div><div className="card-container">
               
                <div className="card">
                    <div className="box-container"  >  <img
                        src="/images/icon_plane.png" alt="Icon" ></img><p>2500 fast VPN server</p></div>
                </div> <div className="card">
                    <div className="box-container"  >  <img
                        src="/images/devices.png" alt="Icon" ></img><p>Protect  all your devices</p></div>
                </div> <div className="card">
                    <div className="box-container"  >  <img
                        src="/images/icon_alternate_phone.png" alt="Icon" ></img><p>24/7 live support</p></div>
                </div>
            </div>
        </div>
        <ScrollButton/>
        <Footer/>
    </>

    );
};

export default Pricing;
