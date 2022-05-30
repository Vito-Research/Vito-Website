import "./App.scss";
import "./Logo.scss";
import bird from "../res/bird.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={bird} alt="logo" />
    </div>
  );
}

export default Logo;
