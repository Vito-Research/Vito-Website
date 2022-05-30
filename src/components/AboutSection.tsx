import "./aboutSection.scss";
import Info from "../res/VitoMethod.svg";

function AboutSection() {
  return (
    <div className="section about" id="about">
      <div className="about-text">
        <h1 className="header">
          Estimated 4% Reduction in Covid-19 Infections <sup>1</sup>
        </h1>
        <h3 className="header light">
          Vito encourages people to take precautions they deem necessary when possibly infected
        </h3>
        <img src={Info} alt="Info" className="info-img" />
      </div>
    </div>
  );
}

export default AboutSection;
