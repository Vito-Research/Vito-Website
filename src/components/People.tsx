import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Landing from "./Landing";
import "./people.scss";
import SectionContainer from "./SectionContainer";
import DrK from "../res/DrK.png";

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
              behavior: "smooth"
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
                Founder of Vito, works on most repositories, primarily with app development and data analysis.
              </caption>
            </div>

            <div className="people-feature-cell">
              <img
                className="people-feature-img"
                alt="Andreas's Profile Pic"
                src={DrK}
              />
              <h3 className="people-feature-header">Dr.Kahanda</h3>
              <caption className="people-feature-caption">
                Ph.D., Computer Science, mentoring members of Vito through the research process
              </caption>

            </div>
            <div className="people-feature-cell">
              <img
                className="people-feature-img"
                alt="Andreas's Profile Pic"
                src="https://avatars.githubusercontent.com/u/13423991?v=4"
              />
              <h3 className="people-feature-header">Ricky LeDew</h3>
              <caption className="people-feature-caption">
                Leads web development with Vito, pursuing a CS degree at UNF
              </caption>

            </div>

            <div className="people-feature-cell">
              <img
                className="people-feature-img"
                alt="Andreas's Profile Pic"
                src="https://avatars.githubusercontent.com/u/62920769?v=4"
              />
              <h3 className="people-feature-header">Ethan Cloin</h3>
              <caption className="people-feature-caption">
                B.S. in Computer Science, furthering a web development skill set, assists with data analysis
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
