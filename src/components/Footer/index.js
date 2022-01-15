import React from 'react'
import './style.css'

export const Footer = () => {
    return (
        <div className="footer">

            <img 
            src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" 
            alt="" 
            className="footer__logo" />

            <div className="footer__lists">
            <div className="footer__listcontainer">
                <h3>Get to know us</h3>
                <ul className="footer__list">
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Cares</li>
                    <li>Gift a Smile</li>
                </ul>
            </div>

            <div className="footer__listcontainer">
                <h3>Connect with us</h3>
                <ul className="footer__list">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>

            <div className="footer__listcontainer">
                <h3>Make Money with Us</h3>
                <ul className="footer__list">
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Amazon GLobal Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                </ul>
            </div>

            <div className="footer__listcontainer">
                <h3>Let Us Help You</h3>
                <ul className="footer__list">
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>Amazon Cares</li>
                    <li>Help</li>
                </ul>
            </div>

            </div>
           
            
        </div>
    )
}
