import ScrollButton from './ScrollButton';
import Header from './Main';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const VerificationCode = () => {
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



    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const handleInputChange = (index, e) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 1) {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);

            if (value !== '' && index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }

        if (value === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return ( <><Header/>
        <div className="verifycard-container">
            <div className="verifycard">
                <h2>Enter Code</h2>
                <div className="box-container" style={{ paddingBottom: "30px" }}><p style={{ color: "#FF6400", textAlign: "center" }}>  We send a 4-digit verification code to your email.</p></div>

              
                <form>
                    {verificationCode.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleInputChange(index, e)}
                            maxLength={1}
                            pattern="\d*"
                            placeholder="0"
                            ref={inputRefs[index]}
                            className="verification-input"
                        />
                    ))}
                    <Link to="/ResetPass"> <button className="btn2" style={{ backgroundColor: "#FF6400", width: "70%", marginTop: "15PX" }} >Verify</button></Link>
                    <Link to="/Forgotpas"> <button className="btn1 " style={{ width: "70%", marginTop: "15PX",marginLeft:"30px" }} >Back</button></Link>
                </form>
            </div>
        </div><ScrollButton />
        <img style={{ width: "100%", height: "30px", padding: "0px", margin: "0px" }}
            src="/images/lines.png" alt="Icon" ></img>
        <div className="box-container" > <Link className="nav-link" to="/Privacy" style={{ marginRight: "20px" }}>Privacy Policy</Link>
            <Link className="nav-link" to="/Terms">Terms and conditions</Link></div>
    </>
    );
};

export default VerificationCode;
