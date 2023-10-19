import "./portfolio.css"
import IMG1 from "../../assets/p1.png"
import IMG2 from "../../assets/p2.png"
import IMG3 from "../../assets/p3.png"
import IMG4 from "../../assets/p4.png"
import IMG5 from "../../assets/p5.png"
import IMG6 from "../../assets/p6.png"

const data = [
  {
    id: 1,
    title: "Sushi Store",
    image: IMG1,
    github: "https://github.com/StarDust130/Sushi-Store",
    demo: "https://stardust-sushi-store.netlify.app/",
  },
  {
    id: 2,
    title: "Catch Naruto Game",
    image: IMG2,
    github: "https://github.com/StarDust130/Catch-Naruto-Game",
    demo: "https://stardust130.github.io/Catch-Naruto-Game/",
  },
  {
    id: 3,
    title: "Image Search Engine",
    image: IMG3,
    github: "https://github.com/StarDust130/Image-Search-Engine",
    demo: "https://stardust130.github.io/Image-Search-Engine/",
  },
  {
    id: 4,
    title: "Quotes Generator",
    image: IMG4,
    github: "https://github.com/StarDust130/React_Quote_Gen",
    demo: "https://stardust-quote-gen.netlify.app/",
  },
  {
    id: 5,
    title: "Music Player",
    image: IMG5,
    github: "https://github.com/StarDust130/Music_Player",
    demo: "https://stardust130.github.io/Music_Player/",
  },
  {
    id: 6,
    title: "Text To Voice",
    image: IMG6,
    github: "https://github.com/StarDust130/Text-To-Voice",
    demo: "https://stardust130.github.io/Text-To-Voice/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="container portfolio_container">
       {
        data.map(({id ,image , title , github , demo}) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-images">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Code
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })
       }
      </div>
    </section>
  );
}

export default Portfolio;
