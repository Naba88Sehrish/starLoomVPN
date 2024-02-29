import ScrollButton from './ScrollButton';
import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './Main';
import Footer from './Footer';



const Privacy = () => {
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
        
        <Header/>
        <div className="Hero-container" style={{ backgroundColor: "#F3F3FE", marginTop: "60px" }}>
            <div className="subtext-section" style={{ alignItems: "flex-start", justifyContent: "flex-start", alignContent: "start" }}>
                <h1 style={{ color: "#FF6400", marginLeft: "100px", marginBottom: "1250px" }}>Privacy Policy:</h1>

            </div>
            <div className="subimage-section">
                <h5 style={{ color: "#FF6400", marginTop: "60px" }}>Privacy Policy</h5>
                <p>At StarLoom VPN, we are committed to protecting the privacy of our customers and website visitors. This Privacy Policy explains the types of personal information we collect, how we use it, and the steps we take to safeguard it. </p>
                <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Information Collection and Use</h5>
                <p>We collect personal information from our customers and website visitors when they purchase a VPN package or pre-configured VPN router, create an account, or subscribe to our newsletter. The information we collect may include name, email address, mailing address, phone number, and payment information.
                <br></br>
                    We use this information to process orders, provide customer support, send marketing and promotional communications, and improve our products and services.</p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Cookies and Tracking Technologies</h5>
                <p>We use cookies and other tracking technologies to improve the user experience on our website and to personalize content and advertisements. These technologies may collect information about your browsing activity, device type, and IP address. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Sharing of Information</h5>
                <p>We do not sell or rent personal information to third parties. We may share information with third parties for the purpose of providing our services, such as processing payments, handling customer support, and sending marketing and promotional communications.</p>
                <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Data Retention</h5>
                <p>We retain personal information for as long as necessary to provide our services and as required by law. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Security</h5>
                <p>We take reasonable measures to protect personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Third-Party Links</h5>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.</p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Changes to this Privacy Policy</h5>
                <p>We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Contact Us</h5>
                <p>If you have any questions about this Privacy Policy, please contact us at info@innvotech.io.<br></br><b>

                    By using our website and services, you consent to the collection and use of your personal information as described in this Privacy Policy.</b> </p> 
            </div>
        </div>

        <ScrollButton />
               <Footer/>
    </>

    );
};

export default Privacy;