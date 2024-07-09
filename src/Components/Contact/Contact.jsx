import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/Contact/Contact.css'
import theme_pattern from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/theme_pattern.svg'
import mail_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/mail_icon.svg'
import location_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/location_icon.svg'
import call_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/call_icon.svg'
import { Result } from 'postcss'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "22832abf-b15d-4e90-a4ae-04238aa33e4f");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert(res.message)
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

      return (

    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on projects, so feel free to contact me about anything you want me to work on. You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>aakashvenkat29@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91 7397347747</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Chennai, Tamil Nadu, India</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onsubmit} className='contact-right'>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>

    )
}

export default Contact
