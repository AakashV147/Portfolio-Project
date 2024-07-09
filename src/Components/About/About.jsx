import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/About/About.css'
import theme_pattern from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/theme_pattern.svg'
import profile_image from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/about_profile.svg'

const about = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a third-year student passionate about AI and machine learning. With a strong foundation in programming and data analysis, I am dedicated to exploring innovative solutions and advancing my knowledge of AI technologies. My goal is to contribute to cutting-edge developments in the field.</p>
                <p>I am a skilled full stack developer with expertise in both front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, and frameworks like React, as well as server-side languages such as Node.js and Python. I create seamless, user-friendly web applications with robust functionality and efficient performance.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}></hr></div>
                <div className="about-skill"><p>Deep Learning</p><hr style={{width:"60%"}}></hr></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>MERN</p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}></hr></div>
            </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>8.85</h1>
          <p>CGPA in University (Till 4th Sem)</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default about
