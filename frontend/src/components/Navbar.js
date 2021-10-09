
import "./Navbar.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar () {

  const [ mobileMenuState, updateMobileMenuState ] = useState(false);

  const toggleMenu = () => {
    updateMobileMenuState(~mobileMenuState);
  }

  const disableMenu = () => {
    updateMobileMenuState(false);
  }

  return(
    <div className="navbar">

      <div className="navbar-container">

        <Link to="/" className="navbar-link" onClick={disableMenu}>
          <div className="navbar-logo">
            REMO
          </div>
        </Link>

        <div className="navbar-bars" onClick={toggleMenu}>
          <i className={mobileMenuState ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>

      <div className={mobileMenuState ? "navbar-menu-mobile-enabled" : "navbar-menu-mobile"}>
        <Link to="/nosotros" className="navbar-mobile-menu-link" onClick={disableMenu}>
          <div>NOSOTROS</div>
        </Link>

        <Link to="/galeria" className="navbar-mobile-menu-link" onClick={disableMenu}>
          <div>GALERÍA</div>
        </Link>

        <Link to="/contacto" className="navbar-mobile-menu-link" onClick={disableMenu}>
          <div>CONTACTO</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;