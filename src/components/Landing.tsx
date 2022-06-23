import { useEffect, useState } from "react";
import "./App.scss";
import "./Landing.scss";
import Logo from "./Logo";

interface LandingProps {
  children: JSX.Element[];
}

function Landing(props: LandingProps) {
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

  const { children } = props;
  return (
    <>
      <div className="gradient" />
      <div className="section landing" id="landing">
        <div className="landing-text" style={{ opacity: landingTextOpacity }}>
          {children}
        </div>
        <Logo />
      </div>
    </>
  );
}

export default Landing;
