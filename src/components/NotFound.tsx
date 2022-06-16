import React from "react";
import Landing from "./Landing";

function NotFound() {
  return (
    <Landing>
      <strong>Oops...</strong>
      <h1>Page Not Found</h1>
      <p>Looks like you might have entered a bad URL.</p>
      <a href="/">
        <button type="button" className="btn btn-cta">
          Return Home
        </button>
      </a>
    </Landing>
  );
}

export default NotFound;
