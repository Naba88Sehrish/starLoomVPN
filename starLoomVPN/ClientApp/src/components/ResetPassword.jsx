import ScrollButton from './ScrollButton';
import Header from './Main';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const ResetPass = () => {
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

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handleConfirmInputChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        // Check if passwords match
        setPasswordMatch(value === password);
    };
    const passwordMatchStyle = {
        color: passwordMatch ? 'green' : 'red',
        textAlign: 'center',
        marginTop: '5px',
    };

    return (
        <><Header/>
            <div className="background-div">
                <div className="Login-container">
                    <div className="box left">
                        <h3>Password reset</h3>
                        <div className="box-container" style={{ paddingBottom: "30px"}}><p style={{ color: "#FF6400",  textAlign:"center"}}>Enter new password and then repeat it.</p></div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleInputChange}
                                placeholder=" Password"
                            /><br></br>
                            <input
                                className="form-control"
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmInputChange}
                                placeholder="Confirm Password"
                            />
                           
                            <span onClick={handleTogglePassword}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                            <div style={passwordMatchStyle}>
                                {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
                            </div>
                           
                        </div>
                        <br></br><Link to="/Login"><button className="btn2" style={{ backgroundColor: "3B5FCA" }} >Save</button></Link>
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

export default ResetPass;
