import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="Navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPbA5l3em4iQcBQbyZUqinsnzAORFZQOycA&usqp=CAU" className="Business-logo"></img>
      <Link to={'/'} className="Nav-text">Home</Link>
      <p className="Nav-text"> | </p>
      <Link to={'/'} className="Nav-text">About Us</Link>
      <p className="Nav-text"> | </p>
      <Link to={'/'} className="Nav-text">Services</Link>
      <div className="Nav-button">
        <button className="Quote-button">Get a quote!</button>
      </div>
      </nav>
    </div>
  )
}

export default NavBar;