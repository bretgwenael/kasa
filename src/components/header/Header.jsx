import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/Logo_kasa.svg";
import "./header.css";

function Header() {
  const location = useLocation(); // Obtient l'URL de la page courante

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  
  export default Header;