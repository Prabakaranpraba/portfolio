import React from 'react'
import "./experiance.css"
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Experiance =()=> {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>

      <div className='container experience_container'>
        <div className='experiance_frontend'>
          <h3>Frontend development</h3>
          <div className='experience_content'>
            <article className='experiance_details'>
              <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>HTML</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
            <article className='experiance_details'>
              <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
            <article className='experiance_details'>
              <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>BOOTSTRAP</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
            <article className='experiance_details'>
              <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>JavaScript</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
            <article className='experiance_details'>
            <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>ReactJS</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
            <article className='experiance_details'>
            <BsFillCheckCircleFill className="experiance_details-icon"/>
              <div>
              <h4>WORDPRESS</h4>
              {/* <small className='text-light'>Experianced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance