import "./navbar.scss";

function Navbar() {
  return (
    <div className="Navbar" id="Navbar">
      <ul className="nav-list">
        <li className="nav-brand">
          <a href="/"> Vito </a>
        </li>

        <li className="nav-item">
          <button
            style={{ margin: "5%", width: "20vw" }}
            type="button"
            className="btn btn-cta nav-btn"
          >
            Join The Community
          </button>
        </li>
        <li className="nav-item">
          <a href="bib.html">Algorithm</a>
        </li>
        <li className="nav-item">
          <a href="consact.html">Apps</a>
        </li>
        <li className="nav-item">
          <a href="sharkspecies.html">About</a>
        </li>
        <li className="nav-item">
          <a className="active" href="index.html">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
