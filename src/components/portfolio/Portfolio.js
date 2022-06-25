import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/Home-Vazhalai1.png"
import IMG2 from "../../assets/Vrindafarms.png"
import IMG3 from "../../assets/Teemage-Teemage-Precast-In.png"
import IMG4 from "../../assets/Home-flexconelastomerics.png"
import IMG5 from "../../assets/Home-Ragagrapics.png"

const data =[
{  
  id: 1,
  image: IMG1,
  title: "Vazhalai",
  github: "http://github.com",
  demo: "https://vazhalai.com/"
},
{  
  id: 2,
  image: IMG2,
  title: "vrindafarms",
  github: "http://github.com",
  demo: "https://vrindafarms.co.in/"
},
{  
  id: 3,
  image: IMG3,
  title: "Teemage",
  github: "http://github.com",
  demo: "https://www.teemageprecast.in/"
},
{  
  id: 4,
  image: IMG4,
  title: "Flexconelastomerics",
  github: "http://github.com",
  demo: "https://flexconelastomerics.in/"
},
{  
  id: 5,
  image: IMG5,
  title: "Ragagrapics",
  github: "http://github.com",
  demo: "https://ragagrapics.in/"
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
          <p>{title}</p>
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