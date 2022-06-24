import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/pic4.png"
import Socials from './Socials'

function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Prabakaran</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <Socials />
        <div className='me'>
          <img src={ME} alt=""/>
        </div>
        <a href='#contact' className='scroll_down'>Scrol Down</a>
      </div>
    </header>
  )
}

export default Header