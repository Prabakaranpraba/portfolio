import React from 'react'
import "./about.css"
import Me from "../../assets/pic3.jpg"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me_image'>
            <img src={Me} alt="about img"/>
          </div>
        </div>
     

      <div className='about__content'>
        <p>I am a front End developer developer and a hardware enthusiastic currently learning web development.</p>
        <p>I currently working on projects based on React </p>
        <p>I was born in Coimbatore and currently in Bangalore, working as a developer</p>
        <p>I've started my career as fullstack developer in Thidiff Technologies from oct 1, 2019 to till date</p>
        <p>I've done few freelancing projects based on PHP, HTML, CSS, JS, wordpress </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About