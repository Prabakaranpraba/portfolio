import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <artical className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h5>Email</h5>
            <p style={{fontSize:"11px"}}>prabakaran15mca012@gmail.com</p>
            <a href='mailto:prabakaran15mca012@gmail.com' rel="noreferrer" target="_blank">Send a message</a>
          </artical>

          <artical className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h5>WhatsApp</h5>
            <p style={{fontSize:"11px"}}>+91 8526094172</p>
            <a href='https://api.whatsapp.com/send?phone=8526094172' rel="noreferrer" target="_blank">Send a message</a>
          </artical>
        </div>
        {/* Contact-form */}
        <form action="">
          <input types="text" name='name' placeholder='You Full name' required />
          <input types="email" name='email' placeholder='You Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <a href='#contact' className='btn btn-primary'>Send Message</a>
        </form>
      </div>
    </section>
  )
}

export default Contact