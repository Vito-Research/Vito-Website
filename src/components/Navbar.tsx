import { useRef, useState, useEffect } from "react";
import { Link, useLocation, Location } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./navbar.scss";

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
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/people">Contributors</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/blog">Blog</NavLink>
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
