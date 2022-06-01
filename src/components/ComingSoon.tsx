import "./comingSoon.scss";
import Noti from "../res/Noti.svg";
import Bolt from "../res/Bolt.svg";
import Back from "../res/Back.svg";
import Features from "../res/Features.png";
function ComingSoon() {
  return (
    <div className="section apps" id="apps">
      <h1 className="coming-Header">Coming Soon</h1>
        <h3 className="coming-Header">An app that detects infection in realtime</h3>
<img src={Features}></img>


      <div className="apps-feature">
        <div className="apps-feature-cell">
          <img alt="icon" className="apps-feature-img " src={Back} />
          <h3 className="apps-feature-header">Background Processing</h3>
          <caption className="apps-feature-caption">A remarkably convenient algorithm that can run when the app is closed to alert you of stress events such as infection</caption>
        </div>

        <div className="apps-feature-cell">
          <img alt="icon" className="apps-feature-img " src={Noti} />
          <h3 className="apps-feature-header">Stress Event Notifications</h3>
          <caption className="apps-feature-caption">Receive stress event notifications after the first launch even when not using the app so you can take take precautions you deem necessary
          </caption>
        </div>
        <div className="apps-feature-cell">
          <img alt="icon" className="apps-feature-img " src={Bolt} />
          <h3 className="apps-feature-header">Speedy Apps</h3>
          <caption className="apps-feature-caption">A super-efficient algorithm to detect infection in real-time that loads quickly so individuals are more likely to use the app and reduce the spread</caption>
        </div>
      </div>
      <a className="" href="https://github.com/Vito-Research">
          <button type="button" className="btn btn-cta coming-extra-space">
            Help Develop Vito
          </button>
          </a>
    </div>
  );
}

export default ComingSoon;
