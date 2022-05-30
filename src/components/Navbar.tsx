import Landing from "./Landing";
import Footer from "./Footer";
import "./navbar.scss";
import SectionContainer from "./SectionContainer";

function Navbar() {
    return (
        <div className="Navbar" id="Navbar">
            <ul>

                <li2><a ><b>Vito</b></a></li2>
                <div id="box1">
                    <li3><a href="bib.html">Join The Community</a></li3>
                </div>
                <li><a href="bib.html">Algorithm</a></li>
                <li><a href="consact.html">Apps</a></li>
                <li><a href="sharkspecies.html">About</a></li>
                <li><a className="active" href="index.html">Home</a></li>

            </ul>

        </div>
    );
}

export default Navbar;
