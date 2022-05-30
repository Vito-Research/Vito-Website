import Landing from "./Landing";
import Footer from "./Footer";
import "./navbar.scss";
import SectionContainer from "./SectionContainer";

function Navbar() {
    return (
        <div className="Navbar" id="Navbar">
            <ul>

                <li className="li2"><a> Vito </a></li>

                   <li><button style={{ margin: "5%", width: "20vw"}} type="button" className="btn btn-cta smaller">
        Join The Community
      </button></li>
                <li className="larger"><a href="bib.html">Algorithm</a></li>
                <li className="larger"><a href="consact.html">Apps</a></li>
                <li className="larger"><a href="sharkspecies.html">About</a></li>
                <li className="larger"><a className="active" href="index.html">Home</a></li>
             
            </ul>

        </div>
    );
}

export default Navbar;
