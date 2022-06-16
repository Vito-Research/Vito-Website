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
          <strong>Our Mission</strong>
          <h1>Reduce the Loss of Life Due to Infection</h1>
          <p>
            An app that utilizes smartwatches to detect stress that may be due
            to infection
          </p>

          <button
            type="button"
            className="btn btn-cta"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight - 48,
                behavior: "smooth",
              })
            }
          >
            Learn More
          </button>
        </div>
        <Logo />
      </div>
    </>
  );
}

export default Landing;
