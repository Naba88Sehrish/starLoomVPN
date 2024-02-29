import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return(
<>
 <div className="footer" style={{ backgroundColor: "black" }}></div>            
            <Link className="navbar-brand" to="/">
                <img src="/images/Logo.png" alt="Logo" />
            </Link>
            <div className="container1">
                <div className="column">                   
                    <h5>Products</h5>
                    <Link className="nav-link" to="/Download">Windows pc VPN</Link>
                    <Link className="nav-link" to="/Download">IOS</Link>
                    <Link className="nav-link" to="/Download">VPN for macOS</Link>
                    <Link className="nav-link" to="/Download">Android</Link>                   
                    <Link className="nav-link" to="/Download">Linux</Link>
                </div>
                <div className="column">                    
                    <h5>General</h5>
                    <Link className="nav-link" to="/Download">What is a VPN?</Link>
                    <Link className="nav-link" to="/Download">VPN software</Link>
                    <Link className="nav-link" to="/Download">Features</Link>
                    <Link className="nav-link" to="/Pricing">Pricing</Link>
                   
                </div>
                <div className="column">                   
                    <h5>Help</h5>
                    <Link className="nav-link" to="/Support">Support center</Link>
                    <Link className="nav-link" to="/Support">Contect us</Link>
                    <Link className="nav-link" to="/FAQ">FAQ</Link>
                    <Link className="nav-link" to="/Privacy">Privacy Policy</Link>
                    <Link className="nav-link" to="/Terms">Terms and conditions</Link>
                </div>
                <div className="column">                    
                    <h5>Benefits</h5>
                   
                    <Link className="nav-link" to="/Download">Access Content</Link>
                    <Link className="nav-link" to="/Download">Internet Privacy</Link>
                    <Link className="nav-link" to="/Download">Online Security</Link>
                    <Link className="nav-link" to="/Download">Anonymous Ip</Link>
                    <Link className="nav-link" to="/Download">Prevent tracking</Link>
                </div>
                <div className="column">                   
                    <h5>Tools</h5>
                    <Link className="nav-link" to="/Download">What is my IP?</Link>
                    <Link className="nav-link" to="/Download">Hide your IP</Link>                    
                </div>
            </div>
            <div className="image-container" style={{ marginLeft: "80px", justifyContent: "flex-start" }} >
                <img style={{marginRight:"30px"} }
                    src="/images/icon_twitter.png" data-bs-toggle="tooltip" data-bs-placement="top" title="twitter" 
                    alt="Icon"
                    ></img>
                <img style={{ marginRight: "30px" }}
                    src="/images/icon_linkedin_in.png" data-bs-toggle="tooltip" data-bs-placement="top" title="linkedin" 
                    alt="Icon"
                    ></img>
                <img style={{ marginRight: "30px" }}
                    src="/images/icon_instagram.png" data-bs-toggle="tooltip" data-bs-placement="top" title="instagram" 
                    alt="Icon"
                   ></img>
                <img style={{ marginRight: "30px" }}
                    src="/images/icon_facebook_f.png" data-bs-toggle="tooltip" data-bs-placement="top" title="facebook"
                    alt="Icon"
                    ></img></div>
            <div className="footer" style={{ backgroundColor: "black" }}></div>            
            <div className="box-container" style={{ marginTop: "60px" }} >  <img
        src="/images/vector.png" alt="Icon" ></img><p>2023  Innvotech Solutions,170 Eden Avenue, Airport Road Lahore</p></div></>
        
        );
    };

export default Footer;