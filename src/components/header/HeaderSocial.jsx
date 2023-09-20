import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="header_socials">
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
    </div>
  );
}
export default HeaderSocial;
