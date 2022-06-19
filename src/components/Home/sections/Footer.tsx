import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="section footer">
      <div>
        <p>
          <a
            className="footer-text footer-text-space"
            href="https://www.nature.com/articles/s41746-021-00422-7"
          >
            [1] Modeling the effect of exposure notification and
            non-pharmaceutical interventions on COVID-19 transmission in
            Washington state{" "}
          </a>
        </p>
        <p>
          <a
            className="footer-text"
            href="https://share.streamlit.io/andreasink/vito-visualization/main/vito_visualization_tools/main.py"
          >
            [2] Vito Visualization Web App{" "}
          </a>
        </p>

        <p>
          <a
            className="footer-text"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8240687/"
          >
            [3] Smartwatch can detect early signs of illness{" "}
          </a>
        </p>
      </div>
      <div className="footer-div">
        <h2>Organization</h2>
        <p>
          <Link className="footer-text" to="/People">
            Code Contributors
          </Link>
        </p>
        <p>
          <Link className="footer-text" to="/">
            About
          </Link>
        </p>
        <p>
          <a className="footer-text" href="https://discord.gg/fWaN3DFyCA">
            Community
          </a>
        </p>
        <p>
          <a
            className="footer-text"
            href="https://www.linkedin.com/company/vito-research/about/"
          >
            Linkedin
          </a>
        </p>
        <p>
          <a
            className="footer-text"
            href="https://www.craft.do/s/jK9mX5dA3exvRw"
          >
            Press kit
          </a>
        </p>
      </div>

      <div className="footer-div footer-div-space">
        <h2>Platforms</h2>
        <p>
          <Link className="footer-text" to="/coming-soon">
            Android
          </Link>
        </p>
        <p>
          <Link className="footer-text" to="/coming-soon">
            iOS
          </Link>
        </p>
        <p>
          <a
            className="footer-text"
            href="https://share.streamlit.io/vito-research/vito-visualization/main/main.py"
          >
            Streamlit
          </a>
        </p>
        <p>
          <a className="footer-text" href="https://github.com/Vito-Research">
            Github
          </a>
        </p>
      </div>

      <div className="footer-div footer-div-space">
        <h2>Support</h2>
        <p>
          <Link className="footer-text" to="/coming-soon">
            Privacy Policy
          </Link>
        </p>
        <p>
          <a className="footer-text" href="mailto:andreasink17@gmail.com">
            Contact
          </a>
        </p>
        <p>
          <Link className="footer-text" to="/coming-soon">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
