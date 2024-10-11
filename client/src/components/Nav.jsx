import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-name.png";
import Account from "../assets/images/account.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <button type="button" className="menu-burger" onClick={toggleMenu}>
        <div className={`burger-component-1 ${menuOpen ? "open" : ""}`} />
        <div className={`burger-component-2 ${menuOpen ? "open" : ""}`} />
        <div className={`nav-links-burger ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/phones">Browse phones</Link>
        </div>
      </button>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/phones">Browse phones</Link>
      </div>
      <img src={Logo} alt="Smartpick" className="logo" />
      <div className="user-account-nav">
        <img src={Account} alt="Account management" className="account-menu" />
        <Link to="/user">My account</Link>
      </div>
    </nav>
  );
}
