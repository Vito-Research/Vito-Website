import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer({ children }: PropsWithChildren<{}>) {
  return (
    <footer className="section footer">
      <div className="citations">{children}</div>
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
