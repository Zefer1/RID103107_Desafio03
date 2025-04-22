import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container">
        <div className="header-content">

          
          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          
          <nav className={`nav-links${menuOpen ? " open" : ""}`}>
            <Link to="/projectos" onClick={closeMenu}>Projetos</Link>
            <Link to="/tecnologias" onClick={closeMenu}>Tecnologias</Link>
            <Link to="/about" onClick={closeMenu}>Sobre mim</Link>
          </nav>

          
          <div className="social-links">
            <a href="https://github.com/Zefer1" target="_blank" rel="noopener">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;