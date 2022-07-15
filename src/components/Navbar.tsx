import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const restoreScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="nav-brand">
        <a href="/">Vito</a>
      </div>
      <div className="nav-gradient" />
      <div className="nav-links" id="nav-links">
        <div className="nav-item">
          <NavLink to="/" onClick={restoreScroll}>Home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/people" onClick={restoreScroll}>Contributors</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/blog" onClick={restoreScroll}>Blog</NavLink>
        </div>
        <div className="nav-btn-div">
          <a
            href="https://discord.gg/An95qFPPKK"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-secondary nav-btn">
              Join The Community
            </button>
          </a>
        </div>
      </div>
      <button
        type="button"
        className="hamburger"
        onClick={() => {
          const links = document.getElementById("nav-links");
          links?.toggleAttribute("expand");
        }}
      >
        <span className="hamburger-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
