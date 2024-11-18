import React from 'react';
import '../App.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';



function Footer() {
    return (
        <footer>
            <div className='footer-cont'>
            <div className="icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
            <a style={{fontSize:'14px'}} href=""> Copyright ©2020 All rights reserved </a>
            </div>
            
        </footer>
    );
}


export default Footer;