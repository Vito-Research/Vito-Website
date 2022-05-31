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
      <div className="section landing">
        <div className="landing-text" style={{ opacity: landingTextOpacity }}>
          <h1>Reduce The Loss Of Life Due to Infection</h1>
          <h3>An app that detects infection in realtime</h3>
          <button type="button" className="btn btn-cta">
            Learn More
          </button>
        </div>
        <Logo />
      </div>
    </>
  );
}

export default Landing;
