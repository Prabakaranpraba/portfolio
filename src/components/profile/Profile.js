import React from 'react'
// import ProfileImg from "../../images/profile.jpg";
import "./profilestyle.css"
import SocialMedia from './SocialMedia'

function Profile() {
  return (
    <div>
        <div className='user one'>

        </div>
        {/* <mg src={ProfileImg} > */}
        <p className='text-center text-white'>Hi, my name is Prabakaran and I'm a frontend software engineer. Welcome to my personal website!</p>
       <SocialMedia />
    </div>
  )
}

export default Profile