import "./footer.scss";

function Footer() {
  return (
    <div className="section footer" id="footer">
      <footer className="section footer">
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
        <div className="footer-div">
          <h2>Organization</h2>
          <p>
            <a className="footer-text" href="/">
              About
            </a>
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
            <a className="footer-text" href="/">
              Android
            </a>
          </p>
          <p>
            <a
              className="footer-text"
              href="https://www.linkedin.com/company/vito-research/about/"
            >
              iOS
            </a>
          </p>
          <p>
            <a
              className="footer-text"
              href="https://share.streamlit.io/andreasink/vito-visualization/main/vito_visualization_tools/main.py"
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
            <a className="footer-text" href="/">
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              className="footer-text"
              href="https://www.linkedin.com/company/vito-research/about/"
            >
              Contact
            </a>
          </p>
          <p>
            <a
              className="footer-text"
              href="https://www.craft.do/s/jK9mX5dA3exvRw"
            >
              Terms and Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
