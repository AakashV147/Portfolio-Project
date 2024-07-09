import React from 'react'
import '/Users/aakashvenkatraman/Desktop/portfolio-react/src/Components/Services/Service.css'
import theme_pattern from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/theme_pattern.svg'
import services_data from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/services_data.js'
import arrow_icon from '/Users/aakashvenkatraman/Desktop/portfolio-react/src/assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='work' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="services-container">
        {services_data.map((service, index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>
        })}

      </div>
    </div>
  )
}

export default Services
