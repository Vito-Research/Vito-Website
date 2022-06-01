import { useEffect, useState } from "react";
import "./App.scss";
import "./Landing.scss";
import Logo from "./Logo";

function Landing() {
  const [landingTextOpacity, setOpacity] = useState(1.0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        setOpacity(
          Math.min(
            1,
            Math.max(0, 1 - (2 * window.scrollY) / window.innerHeight)
          )
        );
      });
    });
  }, []);
  return (
    <>
      <div className="gradient" />
      <div className="section landing" id="landing">
        <div className="landing-text" style={{ opacity: landingTextOpacity }}>
          <h1>Detect Stress Events</h1>
          <h3>An app that utilizes smartwatches to detect stress that may be due to infection</h3>
          <a href="https://github.com/Vito-Research">
            <button type="button" className="btn btn-cta">
              Explore Code
            </button>
          </a>
        </div>
        <Logo />
      </div>
    </>
  );
}

export default Landing;
