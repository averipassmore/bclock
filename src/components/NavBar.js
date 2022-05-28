import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import skelly from "../skellyLogo.png";
import { scroller } from "react-scroll/modules";

const NavBar = () => {
  const location = useLocation();

  // const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   };
  // }, [])

  const handleScroll = () => {
    // const position = window.pageYOffset;
    // setScrollPos(position);
    console.log(window.screenTop)
    scroller.scrollTo(window.screenTop);
  }

  return (
    <div>
      {location.pathname === '/quote' ? 
      <nav className="Quote-navbar">
        <img src={skelly} className="Business-logo" alt=""></img>
        <div>
        <Link to='/' className="Quote-nav-text" id="p" >Home</Link>
        </div>
      </nav> 
      :
        <nav className="Navbar">
          <img src={skelly} className="Business-logo" alt=""></img>
          <Link to='/' className="Nav-text" id="Nav-link" onClick={handleScroll}>Home</Link>
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