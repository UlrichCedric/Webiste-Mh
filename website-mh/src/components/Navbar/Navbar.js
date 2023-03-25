import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <a href="/home">
            <img src={logo} alt="Mon Logo" />
          </a>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/home" className="active">Home</a></li>
        <li><a href="/materiel">Matériel</a></li>
        <li><a href="/horaires">Horaires</a></li>
        <li><a href="/adhesion">Adhésion</a></li>
        <li><a href="/localisation">Localisation</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

