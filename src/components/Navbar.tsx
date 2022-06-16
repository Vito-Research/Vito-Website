import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.scss";

function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const location: Location = useLocation();
  useEffect(() => {
    setOffset((navbarRef.current?.clientHeight ?? 0) + 100);
  }, [navbarRef]);
  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="nav-brand">
        <a href="/">Vito</a>
      </div>
      <div className="nav-gradient" />
      {(location && location.pathname === "/" && (
        <>
          <div className="nav-item">
            <ScrollLink
              href="#"
              to="top"
              activeClass="active"
              spy
              smooth
              duration={500}
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
        </>
      )) || (
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
      )}
      <div className="nav-btn-div">
        <a href="https://discord.gg/An95qFPPKK">
          <button type="button" className="btn btn-secondary nav-btn">
            Join The Community
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
