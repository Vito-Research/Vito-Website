import "./people.scss";

function People() {
  return (
    <div className="section people" id="people">
      <h1 className="people-header">Code Contributors</h1>
      <div className="people-feature">
        <div className="people-feature-cell">
          <img
            className="people-feature-img"
            alt="Andreas's Profile Pic"
            src="https://avatars.githubusercontent.com/u/67549402?v=4"
          />
          <h3 className="people-feature-header">Andreas Ink</h3>
          <caption className="people-feature-caption">
            Founded Vito to help people like his Dad who have weaker immune
            systems and to hopefully prevent the spread of infection that led to
            his Aunt's death
          </caption>
        </div>
      </div>
    </div>
  );
}

export default People;
