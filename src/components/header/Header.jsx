import CTA from "./CTA";
import "./header.css"
import ME from "../../assets/me.png"
import HeaderSocial from "./HeaderSocial";
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I&rsquo;m</h5>
        <h1>ChandraShekhar</h1>
        <h5 className="text-light">FullStack Developer (Aspiring)</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
export default Header
