import React from 'react';
import '../styles/Header.css';
import { FaFacebook, FaInstagram, FaTiktok, FaShoppingCart, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header__socials">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
      <div className="header__logo">
        <img src="/images/logo.png" alt="Milahuén Logo" className="header__logo-image" />
      </div>
      <div className="header__actions">
        <button aria-label="Buscar">
          <FaSearch />
        </button>
        <button aria-label="Carrito">
          <FaShoppingCart />
        </button>
        <button className="header__login-button">Iniciar Sesión</button>
      </div>
    </header>
  );
}

export default Header;
