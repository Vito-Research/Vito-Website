import "./comingSoon.scss";
import Landing from "./Landing";

function ComingSoon() {
  return (
    <Landing>
      <strong>Oops...</strong>
      <h1>Coming Soon!</h1>
      <p>
        We haven't finished this part of the site yet. Check back soon for more
        updates!
      </p>
      <a href="https://github.com/Vito-Research">
        <button type="button" className="btn btn-cta">
          Help Develop Vito
        </button>
      </a>
    </Landing>
  );
}

export default ComingSoon;
