import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import ScrollButton from './ScrollButton';
import Header from './Main';


const ForgotPas = () => {
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
   

    return (
        <><Header/>
            <div className="background-div">
                <div className="Login-container">
                    <div className="box left">
                        <h3>Forgot Password</h3>
                        <div className="box-container" style={{ paddingBottom: "30px" }}><p style={{ color: "#FF6400",textAlign:"center" }}>No worries, we’ll send reset instructions.</p></div>

                        <div className="form-group">
                            <input className="form-control " type="text" placeholder="Enter Email"></input><br></br>
                            
                        </div>
                        <Link to="/VerificationCode"> <button className="btn2" style={{ backgroundColor: "#FF6400",width:"100%" }} >Continue</button></Link><br></br>
                        <Link to="/Login">  <button className="btn2" style={{ backgroundColor: "#FF6400", width: "100%" }} >Back</button></Link>
                    </div> <div className="box right"><img
                        src="/images/auth_reset_password_837d25f2_1.png" alt="Icon" ></img>
                    </div></div><ScrollButton />
                <img style={{ width: "100%", height: "50px", padding: "0px", margin: "0px" }}
                        src="/images/lines.png" alt="Icon" ></img>
                <div className="box-container" > <Link className="nav-link" to="/Privacy" style={{ marginRight: "20px" }}>Privacy Policy</Link>
                    <Link className="nav-link" to="/Terms">Terms and conditions</Link></div>

            </div></>
    );
};

export default ForgotPas;
