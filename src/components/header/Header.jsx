import { Link } from 'react-router-dom';
import logo from "../../assets/Logo_kasa.svg";
import "./header.css";

function Header() {
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">À propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;