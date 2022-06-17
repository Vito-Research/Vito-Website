import "./aboutSection.scss";
import Info from "../../../res/VitoMethod.svg";
import StatsSection from "./StatsSection";

function AboutSection() {
  return (
    <div className="section about" id="about">
      <div className="what-is-vito">
        <div className="about-text">
          <h1 className="section-header">What is Vito?</h1>
          <p className="muted">
            Vito is an app developed by students at the University of North
            Florida with the goal of reducing transmission of infectious
            diseases.
          </p>
          <hr />
          <p>
            There is evidence that physiological data such as heart rate,
            respiration rate, and blood oxygen levels may be used to detect
            infectious diseases prior to symptom onset. Vito uses this data to
            notify users and allow them to take appropriate precautions.
          </p>
          <p>
            Vito is based on <em>NightSignal</em>, an algorithm developed by
            researchers at Stanford University. This algorithm was shown to be
            77% effective at predicting COVID-19 infection at or before symptom
            onset.
          </p>
          <p>
            We believe that your health data should be yours, which is why all
            data processing is done on-device. Vito is also open source, so
            anyone can view the code or contribute, which means no secret data
            logging or aggregation.
          </p>
        </div>
        <img
          src={Info}
          alt="Receive an Alert, choose to take precautions, and reduce the spread"
          className="info-img"
        />
      </div>
      <hr />
      <StatsSection />
    </div>
  );
}

export default AboutSection;
