import "./comingSoon.scss";
import Features from "../res/Features.png";

function ComingSoon() {
  return (
    <div className="coming-div">
      <div>
        <h1 className="coming-Header">Coming Soon</h1>
        <h3 className="coming-Header">An app that detects infection in realtime</h3>
        <a className="" href="https://github.com/Vito-Research">
          <button type="button" className="btn btn-cta coming-extra-space">
            Help Develop Vito
          </button>
        </a>
      </div>
      <img alt="Vito Promo" src={Features} />

    </div>
  );
}

export default ComingSoon;
