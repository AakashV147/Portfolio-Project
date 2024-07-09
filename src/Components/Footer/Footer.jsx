import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/Footer/Footer.css'
import footer_logo from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/footer_logo.svg'
import mail_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/mail_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I'm an AI/ML Developer with 2years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2022 Aakash Venkatraman. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
