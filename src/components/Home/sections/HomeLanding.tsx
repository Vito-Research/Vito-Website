import Landing from "../../Landing";

function HomeLanding() {
  return (
    <Landing>
      <strong>Our Mission</strong>
      <h1>Research The Feasibility of Detecting Infection In Realtime With Smartwatch Data</h1>
      <p>
        An app that utilizes smartwatches to detect stress that may be due to
        infection
      </p>

      <button
        type="button"
        className="btn btn-cta"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 48,
            behavior: "smooth"
          });
        }}
      >
        Learn More
      </button>
    </Landing>
  );
}

export default HomeLanding;
