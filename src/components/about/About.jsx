import "./about.css"
import ME from "../../assets/Me2.png"
import {FaAward} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"


function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> 1+ Self-taught  </small>
            </article>

            <article className="about_card">
              <FaUser className="about_icon" />
              <h5>Certifications</h5>
              <small>10+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
           You should hire me as an intern because I bring a strong passion, relevant skills,
            and a desire to contribute effectively to your team. I am eager to learn and adapt, 
            ensuring I make a valuable contribution to the company's success.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About
