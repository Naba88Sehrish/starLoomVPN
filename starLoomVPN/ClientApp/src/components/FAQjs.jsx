import './index.css';
import ScrollButton from './ScrollButton';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Main';

const FAQ = () => {
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
    };
    const faqData = [
        { question: 'What is StarLoom VPN?', answer: ' StarLoom is a VPN service based in privacy-friendly Panama. StarLoom’s robust security comes in the form of a simple and functional application that you can download on your computer, phone, tablet, and even a router to secure your entire home network!' },
        {
            question: 'How does StarLoom VPN work?', answer: 'StarLoom changes your virtual location by giving you a new IP address. It does so by connecting you to one of its 2,500+ VPN servers in 89 locations across 60 countries. A VPN server creates a virtual secure tunnel for your data to travel through. With a VPN on, all the data you send and receive is encrypted.All you need to do is sign up with StarLoom VPN, download the app, and hit Connect on the main screen.And that’s it — you get a safe and seamless connection in just a few seconds!' },
        {
            question: 'Is it safe to use a VPN?', answer: 'Absolutely. Provided you use a trustworthy and top-quality VPN service, like VeePN.However, the safety of using VPNs becomes questionable when you opt for a free provider.While the tag “free” is surely appealing, such VPNs will still come at a cost for you.As they have to make profit somehow, these providers often sell user data to data brokers.Besides, they offer limited functionality and poor security.Doesn’t look so appealing anymore, right?' },
        {
            question: 'Is it legal to use a VPN?', answer: 'Sure thing, a VPN is a popular cybersecurity tool, which is legal in most countries, including the US, Canada, Australia, Germany. A few have banned them altogether, while some have strict laws in place about how VPNs are used. This is to make sure the government can track its citizens’ web actions.Still, note that while using a VPN is allowed in the vast majority of the world, it remains legal as long as you don’t use a VPN for something unlawful.So, you should never do anything that violates your VPN provider’s Terms of Service.' },
        {
            question: 'Is StarLoom VPN secure?', answer: 'Sure thing — your data is kept under wraps with VeePN. How? All because the service:follows a strict No Logs policy —StarLoom doesn’t store any connection or activity logs that can lead to a specific user;  works outside of the jurisdiction of 5/9/14 eyes alliance countries, like the US, UK, Canada, Germany, and others, — VPN providers operating in these countries have to hand over user data to the authorities when asked.' },
        { question: 'Is StarLoom VPN free?', answer: 'StarLoom VPN is a paid VPN service that offers three subscription plans with the same feature set. All plans are backed by a money-back guarantee. So, you have plenty of time to feel the benefits of a trustworthy VPN. Besides, our service comes with a free trial so that you could figure out if this is the app for you.' },
        { question: 'How many devices can I use at the same time?', answer: 'Great news! You can protect all your devices because one StarLoom VPN subscription lets you set up 10 VPN connections at once. Be it on your phone, tablet, PC, smart TV, or even a gaming console — StarLoom VPN will get the job done.' },
        
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (<>
        <Header />
        <div className="box-container"  >  <h2 style={{ marginTop: "120px", color:"#FF6400" }}>Advice and Answers</h2>
            <div className="line" style={{ backgroundColor: "white", width: "350px", height: "auto" }}></div><img
                src="/images/lines.png" alt="Icon" style={{ marginTop: "120px", width: "350px" }}></img></div>
        <p style={{ marginLeft: "130px" }} >Find your answers through the frequent questions collected from our customers.</p>
        <div className="faq-container">
            <div className="heading">
                <h2>General</h2>
               
            </div>
            <div className="faq-content">
                <div className="faq-questions">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ScrollButton />
       
        <Footer />
          </>

    );
};

export default FAQ;