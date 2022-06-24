import React from 'react'
import "./footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href='/' className='footer_logo'>Prabakaran</a>

      <ul className='permalinks'>
        <li><a href='/' target="" rel="noreferrer" >Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Services</a></li>
        <li><a href='#contact'>Conact</a></li>
      </ul>
      
      <div className='footer_socials'>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='/'><FiInstagram /></a>
        </div>

    <div className='footer_copyright'>
      <small>&copy; Praba. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer