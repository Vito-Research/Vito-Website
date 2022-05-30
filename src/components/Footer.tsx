import "./footer.scss";

function Footer() {
  return (
    <div className="section footer" id="footer">

      <footer className="section footer">
        <div className="footer-div">
          <h2>Organization</h2>
          <p><a className="footer-text" href="">About</a></p>
          <p><a className="footer-text" href="https://discord.gg/fWaN3DFyCA">Community</a></p>
          <p><a className="footer-text" href="https://www.linkedin.com/company/vito-research/about/">Linkedin</a></p>
          <p><a className="footer-text" href="https://www.craft.do/s/jK9mX5dA3exvRw">Press kit</a></p>
        </div>

        <div className="footer-div footer-div-space">
          <h2>Platforms</h2>
          <p><a className="footer-text" href="">Android</a></p>
          <p><a className="footer-text" href="https://www.linkedin.com/company/vito-research/about/">iOS</a></p>
          <p><a className="footer-text" href="https://www.craft.do/s/jK9mX5dA3exvRw">Streamlit</a></p>
          <p><a className="footer-text" href="https://github.com/Vito-Research">Github</a></p>
        </div>

        <div className="footer-div footer-div-space">
          <h2>Support</h2>
          <p><a className="footer-text" href="">Privacy Policy</a></p>
          <p><a className="footer-text" href="https://www.linkedin.com/company/vito-research/about/">Contact</a></p>
          <p><a className="footer-text" href="https://www.craft.do/s/jK9mX5dA3exvRw">Terms and Conditions</a></p>
        </div>
      </footer>

    </div>
  );
}

export default Footer;
