import React from "react";
import { Link } from "react-router-dom";
import skelly from "../skellyLogo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="Navbar">
      <img src={skelly} className="Business-logo" alt=""></img>
      <Link to='/' className="Nav-text">Home</Link>
      <p className="Nav-text"> | </p>
      <Link to='/' className="Nav-text">About Us</Link>
      <p className="Nav-text"> | </p>
      <a href="#Services-component" className="Nav-text">Services</a>
      <div className="Nav-button">
        <Link to='/quote' className="Quote-button-text">Get a quote!</Link>
      </div>
      </nav>
    </div>
  )
}

export default NavBar;