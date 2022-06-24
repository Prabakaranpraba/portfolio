import React from 'react'
import Profile from '../components/profile/Profile'

function Header() {
  return (
    <div>
      {/* <div className='container'> */}
        <div className='row'>
            <div className='col-lg-4 col-md-6 bg-primary'>
                <Profile />
            </div>
            <div className='col-lg-8 col-md-6'>
                hdigf
                </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Header