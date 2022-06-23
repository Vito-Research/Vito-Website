import "./algorithmSection.scss";
import Algo from "../../../res/Algo.svg";

function AlgorithmSection() {
  return (
    <div className="section algorithm" id="algorithm">
      <div className="algo-text">
        <h1 className="section-header">The Algorithm</h1>
        <p className="muted">
          Vito uses an optimized version of an algorithm called NightSignal,
          developed by Standford University researchers, to detect infection
          prior to symptom onset.
        </p>
        <hr />
        <p>
          Vito uses an algorithm involving a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Deterministic_finite_automaton"
            target="_blank"
            rel="noreferrer"
          >
            deterministic finite state machine
          </a>{" "}
          to detect higher than normal heartrate and respiration rate. Due to
          the low computational complexity of this approach, our algorithm is
          extremely efficient and easy to run on mobile devices. The study Vito
          is based off showed that by using this algorithm, researchers could
          detect 77% of COVID-19 cases at or before the point where symptoms
          were visible.
        </p>
        <p>
          In the future, we also plan to experiment with using neural networks
          to match or exceed the performance of our current algorithm. We might
          also allow users to opt-in to contribute anonymized vitals data so we
          can continuously train the network and improve detection accuracy for
          all Vito users.
        </p>
      </div>
      <img
        src={Algo}
        alt="Receive an Alert, choose to take precautions, and reduce the spread"
        className="algo-img"
      />
    </div>
  );
}

export default AlgorithmSection;
