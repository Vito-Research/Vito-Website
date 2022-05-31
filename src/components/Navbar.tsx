import { useRef, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.scss";

function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setOffset((navbarRef.current?.clientHeight ?? 0) + 100);
  }, [navbarRef]);
  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="nav-brand">
        <a href="/">Vito</a>
      </div>
      <div className="nav-gradient" />
      <div className="nav-item">
        <ScrollLink
          href="#"
          to="root"
          activeClass="active"
          spy
          smooth
          duration={500}
          offset={-offset}
        >
          Home
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink
          href="#"
          to="about"
          activeClass="active"
          spy
          smooth
          duration={500}
          offset={-offset}
        >
          About
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink
          href="#"
          to="apps"
          activeClass="active"
          spy
          smooth
          duration={500}
          offset={-offset}
        >
          Apps
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink
          href="#"
          to="algorithm"
          activeClass="active"
          spy
          smooth
          duration={500}
          offset={-offset}
        >
          Algorithm
        </ScrollLink>
      </div>
      <div className="nav-btn-div">
        <button type="button" className="btn btn-secondary nav-btn">
          Join The Community
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
