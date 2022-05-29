import "./App.scss";
import "./Landing.scss";
import Logo from "./Logo";

function Landing() {
  return (
    <div className="section landing">
      <div className="landing-text">
        <h1>Reduce The Loss Of Life Due to Infection</h1>
        <h3>An app that detects infection in realtime</h3>
        <button type="button" className="btn btn-cta">
          Learn More
        </button>
      </div>
      <Logo />
    </div>
  );
}

export default Landing;
