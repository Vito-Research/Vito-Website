import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Landing from "./Landing";
import "./people.scss";
import SectionContainer from "./SectionContainer";

function People() {
  return (
    <>
      <Helmet>
        <title>Vito Contributors</title>
      </Helmet>
      <Landing>
        <h1>Contributors</h1>
        <p>We're the people who help make Vito.</p>
        <button
          type="button"
          className="btn btn-cta"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 48,
              behavior: "smooth",
            });
          }}
        >
          Meet the Team
        </button>
      </Landing>
      <SectionContainer>
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
                systems and to hopefully prevent the spread of infection that
                led to his Aunt's death
              </caption>
            </div>
          </div>
        </div>
        <Footer />
      </SectionContainer>
    </>
  );
}

export default People;
