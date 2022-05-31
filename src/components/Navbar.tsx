import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-brand">
        <a href="/"> Vito </a>
      </div>

      <div className="nav-item">
        <a className="active" href="index.html">
          Home
        </a>
      </div>
      <div className="nav-item">
        <a href="sharkspecies.html">About</a>
      </div>
      <div className="nav-item">
        <a href="consact.html">Apps</a>
      </div>
      <div className="nav-item">
        <a href="bib.html">Algorithm</a>
      </div>
      <div className="nav-item">
        <button type="button" className="btn btn-secondary">
          Join The Community
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
