import './index.css';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import Footer from './Footer';
import Header from './Main';
import React, { useState, useEffect } from 'react';

const Download = () => {
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
        const handleMouseOver1 = (event) => {
            event.target.src = '/images/orange_windows.png'; // Replace with your second image path
        };

        const handleMouseOut1 = (event) => {
            event.target.src = '/images/white_windows.png'; // Replace with your first image path
    }; const handleMouseOver2 = (event) => {
        event.target.src = '/images/orange_apple.png'; // Replace with your second image path
    };

    const handleMouseOut2 = (event) => {
        event.target.src = '/images/white_apple.png'; // Replace with your first image path
    }; const handleMouseOver3 = (event) => {
        event.target.src = '/images/iconoirpc_firewall.png'; // Replace with your second image path
    };

    const handleMouseOut3 = (event) => {
        event.target.src = '/images/mac.png'; // Replace with your first image path
    }; const handleMouseOver4= (event) => {
        event.target.src = '/images/ionlogo_google_playstore.png'; // Replace with your second image path
    };

    const handleMouseOut4 = (event) => {
        event.target.src = '/images/white-Android.png'; // Replace with your first image path
    };
    return (<><Header />
         <div className="Hero-container" style={{marginTop:"150px", backgroundColor: "#F1F3FD" }}>
            <div className="text-section">
                <h2>Friendly and Easy-to-Use
                    Interface for Windows</h2>
                <p style={{ textAlign: "left", paddingTop: "15px" }}>The StarLoom VPN app for Windows is the one of the greatest solution
                    for secure and private internet browsing. It is user-friendly and equipped
                    with top-rated encryption.<br></br>
                    Download and install the Windows app now and log in with your account.
                    If you don't have an account yet,  <Link to="/Signup">sign up</Link> here.</p>
                 <Link to="/Pricing"> <button className="btn3" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} > <img style={{ width: "25px", height: "auto", marginRight: "20px", marginTop:"10px"}} src="/images/white_windows.png" alt="heroimage"  /> Download for <br></br>Windows</button></Link>
            </div>
            <div className="image-section">
                <img src="/images/lock.png" alt="heroimage" />
            </div>
        </div><div className="text-container2"><h2 style={{ marginTop: "70px", color:"#FF6400"}}>Install StarLoom VPN on your device</h2></div>
        <p style={{ textAlign: "center" }}>Follow these three simple steps to easily use a VPN on your device in seconds.</p>
        <div className="card-container">
            <div className="card">
                <h3>Step 1:Download</h3>
                <p>Download Star VPN for your system</p>
            </div>
            <div className="card">
                <h3>Step 2: Select location</h3>
                <p>Select the VPN server location you wish to connect</p>
            </div>
            <div className="card">
                <h3>Step 3:Connect</h3>
                <p>Click"Connect" and surf the web with a peace of mind</p>
            </div>
        </div>
        <div className="container " >
            <h2 style={{ marginTop: "50PX", marginbottom: "50PX", color: "#FF6400" }}>Download Star VPN</h2>
            <br/>
                
            <ul className="nav nav-pills" role="tablist">
                <li className="nav-item" style={{marginRight:"50px"} }>
                        <a className="nav-link active" data-bs-toggle="pill" href="#home">Windows</a>
                    </li>
                <li className="nav-item" style={{ marginRight: "50px" }}>
                        <a className="nav-link" data-bs-toggle="pill" href="#menu1">IOS</a>
                    </li>
                <li className="nav-item" style={{ marginRight: "50px" }}>
                        <a className="nav-link" data-bs-toggle="pill" href="#menu2">macOS</a>
                </li>
                <li className="nav-item" style={{ marginRight: "50px" }}>
                    <a className="nav-link" data-bs-toggle="pill" href="#menu3">Andriod</a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="home" className="container tab-pane active"><br/>
                    <h3>Download Star VPN for Windows</h3>
                    <p>Get simple and secure network protection with our easy-to-use Windows app.</p>
                     <Link to="/Pricing"> <button className="btn3"  > <img style={{ width: "25px", height: "auto", marginRight: "20px", marginTop: "10px" }} src="/images/white_windows.png" alt="heroimage" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} /> Download for the<br></br> Windows</button></Link>
                    <div className="image-section" style={{ marginLeft: "200px", marginTop: "50px", width: "80%" }}>
                        <img src="/images/Windows_2.png" alt="heroimage" />
                    </div>
                </div>
                <div id="menu1" className="container tab-pane fade"><br/>
                    <h3>Download Star VPN for iOS</h3>
                    <p>Switch between secure servers around the world in seconds with our iOS app. Keep yourself safe while you surf.</p>
                     <Link to="/Pricing"> <button className="btn3"  > <img style={{ width: "25px", height: "auto", marginRight: "20px", marginTop: "10px" }} src="/images/white_apple.png" alt="heroimage" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} /> Download on the <br></br>App Store</button></Link>
                    <div className="image-section" style={{ marginLeft: "200px", marginTop: "50px", width: "80%" }}>
                        <img src="/images/mac-OS.png" alt="heroimage" />
                    </div>
                </div>
                <div id="menu2" className="container tab-pane fade"><br/>
                    <h3>Download Star VPN for macOS</h3>
                    <p>Protect data and get simple and secure internet access with our easy-to-use macOS app.</p>
                     <Link to="/Pricing"> <button className="btn3"  > <img style={{ width: "25px", height: "auto", marginRight: "20px", marginTop: "10px" }} src="/images/mac.png" alt="heroimage" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} /> Download for the <br></br>Mac OS</button></Link>
                    <div className="image-section" style={{ marginLeft: "200px", marginTop: "50px", width: "80%" }}>
                        <img src="/images/iOS.png" alt="heroimage" />
                    </div>
                </div>
                <div id="menu3" className="container tab-pane fade"><br />
                    <h3>Download Star VPN for Android</h3>
                    <p>Get powerful network security with our easy-to-use Android app. Industry leading encryption Star VPN keeps your connection safe.</p>
                     <Link to="/Pricing"> <button className="btn3"  > <img style={{ width: "25px", height: "auto", marginRight: "20px", marginTop: "10px" }} src="/images/white-Android.png" alt="heroimage" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} />Get on the <br></br>Google Play</button></Link>
                    <div className="image-section" style={{ marginLeft: "20px",marginTop:"50px",width:"80%"}}>
                        <img src="/images/Androidpic.png" alt="heroimage" />
                    </div>
                </div>
            </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "50px" }}>If you are looking for step-by-step installation instructions, visit <Link to="/Support">Support Centre.</Link></p>
        <ScrollButton />
        <Footer />
    </>
    );
};

export default Download;
