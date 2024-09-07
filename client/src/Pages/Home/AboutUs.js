import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <div className="intro">
                Welcome to the AYUSH Portal, your gateway to empowering and supporting businesses, innovators, and entrepreneurs in the field of Ayurveda, Yoga, Unani, Siddha, and Homeopathy. This platform is designed to facilitate the growth of AYUSH-based startups and organizations, providing them with the resources, guidance, and regulatory framework needed to thrive in today’s competitive wellness market.
            </div>
            <div className="mission-vision">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>Our mission is to support and uplift AYUSH-based startups by providing a seamless registration process and offering guidance on regulatory compliance. We aim to create an enabling environment where traditional wisdom meets modern innovation, ensuring that AYUSH businesses can grow, contribute to public health, and reach their full potential.</p>
                </div>
                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>Our vision is to build a dynamic and inclusive ecosystem that supports the growth and global reach of the AYUSH sector. We aim to create an infrastructure that promotes research, innovation, and entrepreneurship in traditional medicine while aligning with global health standards. Through this portal, we seek to integrate AYUSH systems into the mainstream and position India as a leader in the global wellness industry.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
