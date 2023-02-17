import React from 'react'
import Aboutimage from "../assets/images/about.png"

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>

<img src={Aboutimage} alt=""/>
        </div>
<div className='about-text'>
    <h1>LEARN MORE ABOUT US</h1>
    <p>We are a fitness Gym focuses on Human Physique.</p>
</div>

    </div>
  )
}

export default About