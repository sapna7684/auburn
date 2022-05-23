import React from 'react'
import { Link } from 'react-router-dom'
import { SocialMedia } from '../header/navbar/SocialMedia'
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="d-flex p-2">
                    <div className="content-wrapper-3">
                        <h4>Contact Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae nostrum, unde obcaecati et asperiores itaque!</p>
                        <Link to="tel:+91 - 1234567891" className='link'>+91 - 1234567891</Link><br/>
                        <Link to="tel:+91 - 1234567891" className='link'>+91 - 1234567891</Link>
                    </div>
                    <div className="content-wrapper-3">
                        <Link to="/" className='logo'>Auburn</Link>
                        <p className='quote'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</p>
                        <SocialMedia />
                    </div>
                    <div className="content-wrapper-3">
                        <h4>Working Hours</h4>
                        <p className='hours'>Monday-Friday:<br/>08:00 Am -12:00 Am<br/>Saturday-Sunday:<br/>07:00am -11:00 Pm</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
