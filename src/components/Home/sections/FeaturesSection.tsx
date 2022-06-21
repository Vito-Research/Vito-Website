import "./featuresSection.scss";
import Noti from "../../../res/Noti.svg";
import Bolt from "../../../res/Bolt.svg";
import Back from "../../../res/Back.svg";

function FeaturesSection() {
  return (
    <div className="section features" id="features">
      <p className="features-container">
        <div className="features-text">
          <h1 className="section-header">Features</h1>
          <p className="muted features-intro">
            As infectious disease threatens our lives, widespread adoption of
            tools like Vito can make a real difference. Having a substantially
            improved user experience persuades more people to use the app,
            helping to reduce the spread.
            <hr />
          </p>
          <div className="feature-row">
            <div className="feature-cell">
              <img alt="icon" className="feature-icon" src={Back} />
              <h3 className="feature-header">Background Processing</h3>
              <p className="feature-caption">
                Our algorithm runs in the background as it collects vitals data,
                allowing you to know immediately when you might be at risk.
              </p>
            </div>

            <div className="feature-cell">
              <img alt="icon" className="feature-icon" src={Noti} />
              <h3 className="feature-header">Stress Event Notifications</h3>
              <p className="feature-caption">
                Receive stress event notifications even when not using the app
                so you're aware of possible infection and can take necessary
                precautions.
              </p>
            </div>
            <div className="feature-cell">
              <img alt="icon" className="feature-icon" src={Bolt} />
              <h3 className="feature-header">Great Performance</h3>
              <p className="feature-caption">
                Our super-efficient algorithm to detect infection can process
                months worth of data quickly, reducing the time you need to wait
                to see your results.
              </p>
            </div>
          </div>
        </div>
        <div className="phone-img">
          <img alt="Vito on iPhone" src="/src/res/iPhone.png" />
        </div>
      </p>
    </div>
  );
}

export default FeaturesSection;
