import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/Hero/Hero.css'
import profile_image from'/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <h1><span>Myself, Aakash Venkatraman,</span> AI/ML Developer</h1>
        <p>Full stack developer with expertise in frontend and backend technologies, adept at integrating databases, creating seamless user experiences, and problem-solving.</p>
        <div className="hero_action">
            <div className="hero_connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}/>Connect with me</AnchorLink></div>
            <div className="hero_resume"><a href='https://drive.google.com/file/d/1vMoIMZa6b0p3XztfUCqm7YvK6SmJ-CDs/view?usp=sharing' class="button">Download Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
