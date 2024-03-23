import React from 'react';
import logo from "../../assets/Logo_kasa_white.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="copyright">
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;