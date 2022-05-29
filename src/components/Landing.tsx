import "./App.scss";
import "./Landing.scss";
import Logo from "./Logo";

function Landing() {
    return (
        <div className="App">
            <div className="textCenter">
                <div className="textLeft">
                    <h1>Reduce The Loss Of Life
                        Due to Infection</h1>
                    <h3>An app that detects infection in realtime</h3>
                    <button className="cta">Learn More</button>
                </div>
            </div>
            <Logo></Logo>


        </div>
    );
}

export default Landing;