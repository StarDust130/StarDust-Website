import "./footer.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <h1>StarDust</h1>
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience </a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a
          href="https://github.com/StarDust130"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://gifdb.com/images/high/avengers-thor-yes-reaction-n53vyctiq4khtmbx.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/csyadav130"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsXSquare />
        </a>
        <div className="footer_copyright">
          <small>&copy; StarDust All Right  Reserved. 2023</small>
        </div>
      </div>
    </footer>
  );
}
export default Footer