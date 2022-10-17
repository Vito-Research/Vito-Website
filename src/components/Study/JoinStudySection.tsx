import Landing from "../Landing";

function JoinStudyLanding() {
  return (
    <Landing>
      <strong>Join the Study</strong>
      <h2>Select Your Preferred Participation Style</h2>
      <p>
       Fitbit or Apple Watch and an iPhone: web app or iOS app, Android phone and a Fitbit: study web app
      </p>

      
     
      <a className="footer-text" href="https://testflight.apple.com/join/4zTJb4VX">
          
            <button
        type="button"
        className="btn btn-cta"
      >
        iOS App (via TestFlight)
      </button>
      </a>
<h3> Or </h3>
      <a className="footer-text" href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=238Y7Z&redirect_uri=https://vitostudy.streamlitapp.com?&scope=heartrate%20sleep%20oxygen_saturation%20respiratory_rate%20temperature&expires_in=604800">
          
          <button
      type="button"
      className="btn btn-cta"
    >
      Web Version
    </button>
    </a>
     
    </Landing>
  );
}

export default JoinStudyLanding;
