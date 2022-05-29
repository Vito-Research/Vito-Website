import { useState } from "react";

import "./App.scss";
import "./Logo.scss";
import bird from "./bird.svg"
function Logo() {

  return (
    <div className="App">
      <img className="beatAnimation" src= {bird}></img>
    </div>
  );
}

export default Logo;
