import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"

const data =[
{  
  id: 1,
  image: IMG1,
  title: "Title",
  github: "http://github.com",
  demo: "http://github.com"
},
{  
  id: 2,
  image: IMG1,
  title: "Title",
  github: "http://github.com",
  demo: "http://github.com"
},
{  
  id: 3,
  image: IMG1,
  title: "Title",
  github: "http://github.com",
  demo: "http://github.com"
}

]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
      data.map(({id,image,title,github,demo})=>{
        return (
        <article key={id}className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={image} alt=""/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item_image_cta'>
            <a href={github} className='btn' rel="noreferrer" target='_blank'>github</a>
            <a href={demo} className='btn' rel="noreferrer" target='_blank'>Demo</a>
          </div>
        </article>
        )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio