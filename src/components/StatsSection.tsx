import "./statsSection.scss";

function StatsSection() {
  return (
    <div className="section stats" id="stats">

      <div className="stats-feature">
        <div className="stats-feature-cell">
          <h1><strong>99.9% <sup>2</sup></strong></h1>
          <h3 className="stats-feature-header">Algorithmic Accuracy</h3>
          <caption className="stats-feature-caption">
            Compared to NightSignal, an algorithm build by Stanford University to detect Covid-19, Vito's Swift implementation is 99.9% accurate
          </caption>
        </div>

        <div className="stats-feature-cell">
          <h1><strong>78% <sup>3</sup></strong></h1>
          <h3 className="stats-feature-header">Covid-19 Prediction Accuracy</h3>
          <caption className="stats-feature-caption">
            Since Vito is heavily modeled after NightSignal, Vito also has 78% accuracy in predicting Covid-19
          </caption>
        </div>
        <div className="stats-feature-cell">
          <h1><strong>77% <sup>3</sup></strong></h1>
          <h3 className="stats-feature-header">Covid-19 Cases Detected at or Before Symptoms</h3>
          <caption className="stats-feature-caption">
            Vito's base algorithm, NightSignal, in a research setting found that 77% of cases were detectable prior or to or during visible symptom onset
          </caption>
        </div>

      </div>

      <div className="stats-feature">
        <div className="stats-feature-cell">
          <h1><strong>30+</strong></h1>
          <h3 className="stats-feature-header">Contributors</h3>
          <caption className="stats-feature-caption">
            Since August of 2021, over 30 people have contributed to Vito in some capacity, from developers to beta testers to mentors
          </caption>
        </div>

        <div className="stats-feature-cell">
          <h1><strong>10+</strong></h1>
          <h3 className="stats-feature-header">Months of Contributions</h3>
          <caption className="stats-feature-caption">
            Vito has consistently been developed over the past year and we plan to keep contributing an making Vito the best it can be
          </caption>
        </div>
        <div className="stats-feature-cell">
          <h1><strong>4+</strong></h1>
          <h3 className="stats-feature-header">Minutes Less of Processing</h3>
          <caption className="stats-feature-caption">
            Compared to NightSignal's MyPhD app (6+ minutes for processing several days of data), Vito (2.5 minutes for 3 months of data) improved algorithmic efficiency
          </caption>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
