import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="brand" to="/">
          M Daffa Arrafi
        </Link>
        <div className="nav-links">
          <Link to="/#about">About</Link>
          <Link to="/#portfolio">Portofolio</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
