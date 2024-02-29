import ScrollButton from './ScrollButton';
import Header from './Main';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup= () => {
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
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };


    return (
        <>
<Header/>            <div className="background-div">
                <div className="Login-container">
                    <div className="box left">
                        <h3>Sign up</h3>
                        <div className="box-container" style={{ paddingBottom: "30px" }}><p style={{ font: "6px" }}> Have an account?</p> <Link to="/Login">Log in</Link></div>
                      
                        <div className="form-group">
                            <input className="form-control " type="text" placeholder="Enter Address"></input><br></br>
                            <input
                                className="form-control"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleInputChange}
                                placeholder="Password"
                            />
                            <span onClick={handleTogglePassword}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <br></br> <Link to="/Login"><button className="btn2" style={{ backgroundColor: "3B5FCA" }} >Continue</button></Link>
                    </div> <div className="box right"><img
                        src="/images/auth_signup_d33519ec_1.png" alt="Icon" ></img>
                    </div></div><ScrollButton />
                <img style={{ width: "100%", height: "50px", padding: "0px", margin: "0px" }}
                        src="/images/lines.png" alt="Icon" ></img>
                <div className="box-container" > <Link className="nav-link" to="/Privacy" style={{ marginRight: "20px" }}>Privacy Policy</Link>
                    <Link className="nav-link" to="/Terms">Terms and conditions</Link></div>


            </div></>
    );
};

export default Signup;
