import "./statsSection.scss";

function StatsSection() {
  return (
    <div className="section stats" id="stats">
      <h1 className="section-header">Here's Some Statistics...</h1>
      <div className="stats-feature">
        <div className="stats-feature-cell">
          <h1>
            <strong>
              78% <sup>3</sup>
            </strong>
          </h1>
          <h3 className="stats-feature-header">Covid-19 Prediction Accuracy</h3>
          <p className="stats-feature-caption">
            Since Vito is heavily modeled after NightSignal, Vito also has 78%
            accuracy in predicting Covid-19
          </p>
        </div>
        <div className="stats-feature-cell">
          <h1>
            <strong>
              77% <sup>3</sup>
            </strong>
          </h1>
          <h3 className="stats-feature-header">
            Covid-19 Cases Detected at or Before Symptoms
          </h3>
          <p className="stats-feature-caption">
            Vito's base algorithm, NightSignal, in a research setting found that
            77% of cases were detectable prior or during visible symptom
            onset
          </p>
        </div>
        {/* <div className="stats-feature-cell">
          <h1>
            <strong>58%</strong>
          </h1>
          <h3 className="stats-feature-header">Faster Processing Time</h3>
          <p className="stats-feature-caption">
            Compared to NightSignal's MyPhD app (6+ minutes for processing
            several days of data), Vito has improved algorithmic efficiency.
            (2.5 minutes for 3 months of data)
          </p>
        </div> */}
      </div>

      <div className="stats-feature">
        <div className="stats-feature-cell">
          <h1>
            <strong>30+</strong>
          </h1>
          <h3 className="stats-feature-header">Contributors</h3>
          <p className="stats-feature-caption">
            Since August of 2021, over 30 people have contributed to Vito in
            some capacity, from developers to beta testers to mentors
          </p>
        </div>

        <div className="stats-feature-cell">
          <h1>
            <strong>10+</strong>
          </h1>
          <h3 className="stats-feature-header">Months of Contributions</h3>
          <p className="stats-feature-caption">
            Vito has consistently been developed over the past year and we plan
            to keep contributing and making Vito the best it can be
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
