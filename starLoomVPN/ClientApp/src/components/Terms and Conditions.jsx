import ScrollButton from './ScrollButton';
import Header from './Main';
import React, { useEffect, useState } from 'react';
import './index.css';
import Footer from './Footer';

const Terms = () => {
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

        <div className="Hero-container" style={{ backgroundColor: "#F3F3FE" ,marginTop:"60px"}}>
            <div className="subtext-section" style={{alignItems:"flex-start",justifyContent:"flex-start",alignContent:"start"} }>
                <h1 style={{color: "#FF6400" ,marginLeft:"100px",marginBottom:"1700px"}}>Terms of Service:</h1>
                
    </div>
    <div className="subimage-section">
                <h5 style={{ color: "#FF6400", marginTop: "60px" }}>Welcome to StarLoom VPN</h5>
                <p>Our website and services are provided to you subject to the following terms and conditions (the "Terms of Service"). </p>
                <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Service Description</h5>
                <p>StarLoom provides VPN packages and pre-configured VPN routers to customers. Our services include access to our VPN network, technical support, and customer service. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Eligibility</h5>
                <p>Our services are intended for use by individuals who are at least 18 years old. By using our services, you represent and warrant that you meet this age requirement. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Account Creation</h5>
                <p>To use our services, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. </p> 
                 <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Payment</h5>
                <p>You agree to pay for the services you purchase from us in accordance with the prices and billing terms in effect at the time of purchase. We reserve the right to change our prices and billing terms at any time. If we change our prices or billing terms, we will provide you with notice in advance.  </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Refunds</h5>
                <p>We offer a 30-day money-back guarantee on all of our VPN packages and pre-configured VPN routers. If you are not satisfied with our services, you can request a refund within 30 days of your purchase. Refund requests made after 30 days will not be honored. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Service Availability</h5>
                <p>We make every effort to ensure that our services are available to you at all times. However, we do not guarantee that our services will be uninterrupted or error-free. We are not liable for any interruption or disruption of our services. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Support</h5>
                <p>We provide technical support to our customers. If you have any questions or issues with our services, please contact us at [insert contact information]. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Intellectual Property</h5>
                <p>The content and materials on our website and services are protected by intellectual property laws. You may not use our content and materials without our prior written consent. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Disclaimer of Warranties</h5>
                <p>Our services are provided “As is” without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, on non-infringement. We do not warrant that our services will be uninterrupted or error-free. </p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Limitation of Liability</h5>
                <p>In no event shall we be liable for any damages whatsoever, including, but not limited to, direct, indirect, special, consequential, punitive, or incidental damage, arising out or of in connection with your use of our services.</p> <h5 style={{ color: "#FF6400", marginTop: "30px" }}>Governing Law</h5>
                <p>These Terms of Service and your use of our services shall be governed by and construed in accordance with the laws of the [insert jurisdiction], without giving effect to any principles of conflicts of law. </p><h5 style={{ color: "#FF6400", marginTop: "30px" }}>Changes to Terms of Service</h5><p>We reserve the right to update these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on our website.
                <br></br>
                    <b>  By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, please do not use our website or services.</b> </p>
    </div>
        </div>

        <ScrollButton />
         <Footer/>
    </>

    );
};

export default Terms;