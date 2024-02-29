import './index.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
    }, []); const navbarClasses = ['navbar', 'navbar-expand-md', 'fixed-top'];
    if (scrolled) {
        navbarClasses.push('scrolled', 'animated');
    }
    return (
        <nav className={navbarClasses.join(' ')}>

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/images/Logo.png" alt="Logo" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Download">Download</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Support">Support</Link>
                        </li> <li className="nav-item">
                            <Link className="nav-link" to="/Servers">Servers</Link>
                        </li>
                    </ul>
                    <Link to="/Login"> <button className="btn1 " >Login</button></Link>
                    <Link to="/Download">  <button className="btn2" style={{ marginRight: "50px" }} >Get VPN</button></Link>

                </div>
            </div>
        </nav>
    );
};

export default Header;