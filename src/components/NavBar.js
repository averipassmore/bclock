import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import skelly from "../skellyLogo.png";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  return (
    <div>
      {location.pathname === '/quote' ? 
      <nav className="Quote-navbar">
        <img src={skelly} className="Business-logo" alt=""></img>
        <Link to='/' className="Quote-nav-text" id="p">Home</Link>
      </nav> 
      :
        <nav className="Navbar">
          <img src={skelly} className="Business-logo" alt=""></img>
          <Link to='/' className="Nav-text" id="Nav-link">Home</Link>
          <p className="Nav-text-seperator"> | </p>
          <Link to='/' className="Nav-text" id="Nav-link">About Us</Link>
          <p className="Nav-text-seperator"> | </p>
          <a href="/#Services-component" className="Nav-text" id="Nav-link">Services</a>
          <div className="Nav-button">
            <Link to='/quote' className="Quote-button-text">Get a quote!</Link>
          </div>
        </nav>
    }
      
      
    </div>
  )
}

export default NavBar;