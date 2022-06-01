import "./algorithmSection.scss";
import Algo from "../res/Algo.svg";

function AlgorithmSection() {
  return (
    <div className="section algorithm" id="algorithm">
      <h1 className="algorithm-header">Algorithm</h1>

      <img alt="algorithm" className="algo" src={Algo} />
      <caption className="algorithm-caption">Vito uses a deterministic finite state machine to detect higher than normal heart rate and post study respiration rate.  We look to expand on machine learning by using neural networks.  A deterministic finite state is a level system that has certain conditions to build on each previous data point.  One study by Stanford University found that a median of 4.3 days prior to visible symptom onset of Covid-19, their algorithm was able to detect Covid-19.</caption>
      <a href="https://github.com/Vito-Research/Vito-White-Paper/blob/main/Vito-White-Paperv2.pdf">
        <button style={{ marginTop: "5%" }} type="button" className="btn btn-cta">
          Explore The Algorithm
        </button>
      </a>
    </div>
  );
}

export default AlgorithmSection;
