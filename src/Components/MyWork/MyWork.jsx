import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/MyWork/MyWork.css'
import theme_pattern from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/theme_pattern.svg'
import myworkdata from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/mywork_data.js'
import arrow_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {myworkdata.map((work, index)=>{
                return <img key={index} src={work.w_img} alt=""/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
