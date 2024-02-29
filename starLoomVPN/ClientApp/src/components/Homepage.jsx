
import './index.css';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Main';
const HomePage = () => {
   
    //Main text
    const [texts, setTexts] = useState(['Safeguard your data', 'Protect your privacy', 'Change your location', 'Access any content', 'Stay anonymous online']);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [texts]);

    //services
    const handleMouseOver = (event) => {
        event.target.src = '/images/deviconwindows8.png'; 
    };

    const handleMouseOut = (event) => {
        event.target.src = '/images/icon_windows.png';
    };
    const handleMouseOver1 = (event) => {
        event.target.src = '/images/simple_iconsappletv.png'; 
    };

    const handleMouseOut1 = (event) => {
        event.target.src = '/images/icon_apple.png';
    }; const handleMouseOver2 = (event) => {
        event.target.src = '/images/logoschrome.png'; 
    };

    const handleMouseOut2 = (event) => {
        event.target.src = '/images/icon_chrome.png'; 
    }; const handleMouseOver3 = (event) => {
        event.target.src = '/images/logosmicrosoft_edge.png'; 
    };

    const handleMouseOut3 = (event) => {
        event.target.src = '/images/icon_edge_browser.png'; 
    }; const handleMouseOver4 = (event) => {
        event.target.src = '/images/logosfirefox.png';
    };

    const handleMouseOut4 = (event) => {
        event.target.src = '/images/icon_firefox_browser.png'; 
    }; const handleMouseOver5 = (event) => {
        event.target.src = '/images/logosinternetexplorer.png'; 
    };

    const handleMouseOut5 = (event) => {
        event.target.src = '/images/icon_internet_explorer.png'; 
    }; const handleMouseOver6 = (event) => {
        event.target.src = '/images/iconsios.png'; 
    };

    const handleMouseOut6 = (event) => {
        event.target.src = '/images/icon_ios_app_store.png';
    }; const handleMouseOver7 = (event) => {
        event.target.src = '/images/deviconsafari.png'; 
    };

    const handleMouseOut7 = (event) => {
        event.target.src = '/images/icon_safari.png'; 
    }; const handleMouseOver8 = (event) => {
        event.target.src = '/images/skyp.png'; 
    };

    const handleMouseOut8 = (event) => {
        event.target.src = '/images/icon_skype.png'; 
    }; const handleMouseOver9 = (event) => {
        event.target.src = '/images/deviconandroid.png';
    };

    const handleMouseOut9 = (event) => {
        event.target.src = '/images/Android.png'; 
    };
    //servers

    const handleMouseOut10 = (event) => {
        event.target.src = '/images/white_windows.png';
    };


    const handleMouseOut11 = (event) => {
        event.target.src = '/images/white_apple.png';
    };

    const handleMouseOut12 = (event) => {
        event.target.src = '/images/white_chrome.png'; 
    };
    const handleMouseOut13 = (event) => {
        event.target.src = '/images/white_edge_browser.png'; 
    };

    const handleMouseOut14 = (event) => {
        event.target.src = '/images/white_firefox_browser.png'; 
    };

    const handleMouseOut15 = (event) => {
        event.target.src = '/images/white_internet_explorer.png'; 
    };

    const handleMouseOut16 = (event) => {
        event.target.src = '/images/white_ios_app_store.png'; 
    };

    const handleMouseOut17 = (event) => {
        event.target.src = '/images/white_safari.png';
    };

    const handleMouseOut18 = (event) => {
        event.target.src = '/images/white_skype.png';
    };

    const handleMouseOut19 = (event) => {
        event.target.src = '/images/white-Android.png'; 
    }; 
        return (<>
            <Header/>
            <div className="text-container1">
                <h1 className="changing-text">{texts[currentTextIndex]}</h1>
            </div>
            <div className="text-container2"><h2>with our VPN service</h2></div>
            <div></div>
            <div className="img-fluid image-container" >
                <img 
                    src="/images/icon_windows.png" data-bs-toggle="tooltip" data-bs-placement="top" title="windows" 
                    alt="Icon"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}></img>
                <img
                    src="/images/icon_apple.png" data-bs-toggle="tooltip" data-bs-placement="top" title="apple"
                    alt="Icon"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}></img>
                <img
                    src="/images/icon_chrome.png" data-bs-toggle="tooltip" data-bs-placement="top" title="chrome" 
                    alt="Icon"
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}></img>
                <img
                    src="/images/icon_edge_browser.png" data-bs-toggle="tooltip" data-bs-placement="top" title="edge"
                    alt="Icon"
                    onMouseOver={handleMouseOver3}
                    onMouseOut={handleMouseOut3}></img>
                <img
                    src="/images/icon_firefox_browser.png" data-bs-toggle="tooltip" data-bs-placement="top" title="firefox" 
                    alt="Icon"
                    onMouseOver={handleMouseOver4}
                    onMouseOut={handleMouseOut4}></img>
                <img
                    src="/images/icon_internet_explorer.png" data-bs-toggle="tooltip" data-bs-placement="top" title="internet_explorer" 
                    alt="Icon"
                    onMouseOver={handleMouseOver5}
                    onMouseOut={handleMouseOut5}></img>
                <img
                    src="/images/icon_ios_app_store.png" data-bs-toggle="tooltip" data-bs-placement="top" title="ios" 
                    alt="Icon"
                    onMouseOver={handleMouseOver6}
                    onMouseOut={handleMouseOut6}></img>
                <img
                    src="/images/icon_safari.png" data-bs-toggle="tooltip" data-bs-placement="top" title="safari" 
                    alt="Icon"
                    onMouseOver={handleMouseOver7}
                    onMouseOut={handleMouseOut7}></img>
                <img
                    src="/images/icon_skype.png" data-bs-toggle="tooltip" data-bs-placement="top" title="skype"
                    alt="Icon"
                    onMouseOver={handleMouseOver8}
                    onMouseOut={handleMouseOut8}></img><img
                        src="/images/Android.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Android" 
                        alt="Icon"
                        onMouseOver={handleMouseOver9}
                        onMouseOut={handleMouseOut9}></img>

            </div> <div className="text-container2"><Link to="/Download"> <button className="btn2"  >Get VPN Now</button></Link></div>
            <p style={{ textAlign: "center", padding: "10px" }}>100% money-back guarantee</p>
            <div className="Hero-container" style={{ padding: "20px" }}>
                <div className="text-section">
                    <h2>Protect yourself online with a fast and reliable VPN</h2>
                    <div className="Hero-container" style={{ justifyContent: "flex-start", display: " flex" }} >  <img src="/images/flag_of_switzerland_2.png" alt="heroimage" /> <p style={{ textAlign: "center", paddingTop: "15px" }}>Swiss-based</p></div>
                    <div className="Hero-container" style={{ justifyContent: "flex-start" }} >  <img src="/images/carbonsecurity.png" alt="heroimage" /> <p style={{ textAlign: "center", paddingTop: "15px" }}>30-day money-back guarantee</p></div>
                </div>
                <div className="image-section">
                    <img className="img-fluid" src="/images/hero_image_opt_1.png" alt="heroimage" />
                </div>
            </div>
            <h1 className="changing-text " style={{ padding: "20px" }}>Secure your internet</h1>
            <div className="Hero-container" style={{ backgroundColor: "#F1F3FD" }}>
                <div className="subtext-section">
                    <h3>Get the strongest encryption</h3>
                    <p>Make sure everything you do online remains private
                        with VeePN's top-grade encryption. We use the most
                        robust AES-256 algorithm that will make your data virtually impenetrable to determined scammers.
                    </p><h3>Enjoy unlimited bandwidth</h3><p>How crowded a VPN server is and how far it is from you directly affects your VPN connection speed. With a network of more than 2,500 servers in 60 countries, VeePN ensures that your VPN connection is lightning fast!</p>
                </div>
                <div className="subimage-section">
                    <img src="/images/_devices_5ea0316b_1.png" alt="heroimage" />
                </div>
            </div>
            <div className="Hero-container" style={{ backgroundColor: "#F1F3FD" }}>

                <div className="subimage-section">
                    <img src="/images/_earth_04136ec4_1_1.png" alt="heroimage" />
                </div><div className="subtext-section">
                    <h3>Experience the Internet freedom</h3>
                    <p>Forget about limits and stream your favorite content anywhere, anytime. All without compromising your privacy. Access more with VeePN, your gateway to unlimited and secure streaming and browsing.

                    </p><h3>Connect multiple devices</h3><p>Secure 10 devices on different platforms like Windows, macOS, iOS, Android, and more. Use VeePN on your laptop, tablet, phone, smart TV, and other devices of your choice — with a single subscription!</p>
                </div>

            </div>
            <div className="containerR">
                <div className="box left-radius">
                    <h4 style={{ marginTop: "90px" }} >Experience free Internet with VPN</h4>
                    <Link to="/Download"> <button className="button-white"  >Get VPN Now</button></Link>
                    <div className="box-container" style={{ marginTop: "10px" }} ><p style={{ fontSize: "18px" }}>Available on:</p>
                        <img
                            src="/images/white_windows.png" data-bs-toggle="tooltip" data-bs-placement="top" title="windows"
                            alt="Icon"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut10}></img>
                        <img
                            src="/images/white_apple.png" data-bs-toggle="tooltip" data-bs-placement="top" title="apple" 
                            alt="Icon"
                            onMouseOver={handleMouseOver1}
                            onMouseOut={handleMouseOut11}></img>
                        <img
                            src="/images/white_chrome.png" data-bs-toggle="tooltip" data-bs-placement="top" title="chrome" 
                            alt="Icon"
                            onMouseOver={handleMouseOver2}
                            onMouseOut={handleMouseOut12}></img>
                        <img
                            src="/images/white_edge_browser.png" data-bs-toggle="tooltip" data-bs-placement="top" title="edge" 
                            alt="Icon"
                            onMouseOver={handleMouseOver3}
                            onMouseOut={handleMouseOut13}></img>
                        <img
                            src="/images/white_firefox_browser.png" data-bs-toggle="tooltip" data-bs-placement="top" title="firefox" 
                            alt="Icon"
                            onMouseOver={handleMouseOver4}
                            onMouseOut={handleMouseOut14}></img>
                        <img
                            src="/images/white_internet_explorer.png" data-bs-toggle="tooltip" data-bs-placement="top" title="internet_explorer" 
                            alt="Icon"
                            onMouseOver={handleMouseOver5}
                            onMouseOut={handleMouseOut15}></img>
                        <img
                            src="/images/white_ios_app_store.png" data-bs-toggle="tooltip" data-bs-placement="top" title="ios" 
                            alt="Icon"
                            onMouseOver={handleMouseOver6}
                            onMouseOut={handleMouseOut16}></img>
                        <img
                            src="/images/white_safari.png" data-bs-toggle="tooltip" data-bs-placement="top" title="safari" 
                            alt="Icon"
                            onMouseOver={handleMouseOver7}
                            onMouseOut={handleMouseOut17}></img>
                        <img
                            src="/images/white_skype.png" data-bs-toggle="tooltip" data-bs-placement="top" title="skype"
                            alt="Icon"
                            onMouseOver={handleMouseOver8}
                            onMouseOut={handleMouseOut18}></img><img
                                src="/images/white-Android.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Android" 
                                alt="Icon"
                                onMouseOver={handleMouseOver9}
                                onMouseOut={handleMouseOut19}></img>
                    </div>
                </div>
                <div className="box right-radius">
                    <div className="box-container" style={{ marginTop: "90px" }} >  <img
                        src="/images/ggwebsite.png" alt="Icon" ></img><p>30-day money-back guarantee</p></div>
                    <div className="box-container" > <img
                        src="/images/eilike.png" alt="Icon" ></img> <p>48.2+ million users worldwide</p></div>
                    <div className="box-container" style={{ marginRight: "74px" }} > <img
                        src="/images/white-securirty.png" alt="Icon" ></img> <p>AES-256 encryption</p></div>
                </div>
            </div>
            <h1 style={{ textAlign: "center" }}>High-Speed Servers All Around the World</h1>
            <div >
                <img src="/images/server_images.png" alt="Responsiveimg" style={{ width: '100%', height: 'auto' }} />
            </div><div className="text-container2"><h2 style={{ marginTop: "20px" }}>Global VPN server network</h2></div>
            <p style={{ textAlign: "center" }}>StarLoom VPN has hundreds of secure VPN servers all around the world, including<br></br> several free VPN servers. This ensures there is always a high-bandwidth server <br></br>nearby no matter where you are connecting from, providing a low-latency<br></br>  VPN connection for browsing, streaming, and bypassing censorship.</p>
            <div className="text-container2">  <button className="button-white"  >See full server list</button></div>
            <div className="container1">
                <div className="column">
                    <img src="/images/star.png" alt="pic" />
                    <p>P2P  support</p>
                </div>
                <div className="column">
                    <img src="/images/arrow.png" alt="pic" />
                    <p>Unlimited bandwidth</p>
                </div>
                <div className="column">
                    <img src="/images/mobile.png" alt="pic" />
                    <p>Up to 10 devices</p>
                </div>
                <div className="column">
                    <img src="/images/small-lock.png" alt="pic" />
                    <p>Unblock content</p>
                </div>
            </div> <div className="box-container"   >
                <Link to="/Download"> <button className="btn2" style={{ marginRight: "50px" }} >Get VPN Now</button></Link>
                <Link to="/servers">  <button className="button-white"  >See all feature</button></Link></div>
            <ScrollButton />
            <Footer/>
           
        </>

        );
    };

export default HomePage;
