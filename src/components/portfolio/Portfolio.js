import React from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/Home-Vazhalai1.png"
// import IMG2 from "../../assets/Vrindafarms.png"
import IMG3 from "../../assets/Teemage-Teemage-Precast-In.png";
// import IMG4 from "../../assets/Home-flexconelastomerics.png"
// import IMG5 from "../../assets/Home-Ragagrapics.png"
import IMG6 from "../../assets/Sambhaar-online-grocery-store.png";
import IMG7 from "../../assets/sambhaarmaverico.png";
import IMG8 from "../../assets/Jerith-Group-Home.png";
// import IMG9 from "../../assets/Home-SSVSV-Fashion.png"
import IMG10 from "../../assets/vootclean.png";
import IMG11 from "../../assets/smb.png";

const data = [
  {
    id: 1,
    image: IMG10,
    title: "Voot Clean",
    github: "http://github.com",
    demo: "https://vootclean.com/",
  },
  {
    id: 2,
    image: IMG7,
    title: "Sambhaar",
    github: "http://github.com",
    demo: "https://sambhaar.maverico.com/",
  },
  {
    id: 2,
    image: IMG11,
    title: "SMB",
    github: "http://github.com",
    demo: "sakthimurugangroup.com",
  },
  {
    id: 3,
    image: IMG6,
    title: "Sambhaar",
    github: "http://github.com",
    demo: "https://sambhaar.com/",
  },
  // {
  //   id: 3,
  //   image: IMG9,
  //   title: "ssvsv Fashion",
  //   github: "http://github.com",
  //   demo: "https://ssvsvfashion.com/"
  // },
  {
    id: 4,
     image: IMG2,
    title: "vrindafarms",
   github: "http://github.com",
   demo: "https://vrindafarms.co.in/",
  },
  // {
  //   id: 5,
  //   image: IMG2,
  //   title: "vrindafarms",
  //   github: "http://github.com",
  //   demo: "https://vrindafarms.co.in/"
  // },
  {
    id: 6,
    image: IMG3,
    title: "Teemage",
    github: "http://github.com",
    demo: "https://www.teemageprecast.in/",
  },
    {
    id: 7,
    image: IMG8,
    title: "Jerith Group",
    github: "http://github.com",
    demo: "https://www.jerithgroup.com/",
  },
  
  // {
  //   id: 7,
  //   image: IMG4,
  //   title: "Flexconelastomerics",
  //   github: "http://github.com",
  //   demo: "https://flexconelastomerics.in/"
  // },
  // {
  //   id: 8,
  //   image: IMG5,
  //   title: "Ragagrapics",
  //   github: "http://github.com",
  //   demo: "https://ragagrapics.in/"
  // },
  // {
  //   id: 9,
  //   image: IMG1,
  //   title: "Vazhalai",
  //   github: "http://github.com",
  //   demo: "https://vazhalai.com/"
  // }
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt="" />
              </div>
              <p>{title}</p>
              <div className="portfolio_item_image_cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
                <a href={demo} className="btn" rel="noreferrer" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
