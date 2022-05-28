import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import skelly from "../skellyLogo.png";
import Services from "./Services";
import FirstSection from "./FirstSection";
import QuoteForm from "./QuoteForm";
// import { scroller } from "react-scroll/modules";

const NavBar = () => {
  const location = useLocation();

  // const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    // console.log(location.pathname);
  }, [location])

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   };
  // }, [])

  const handleScroll = (e) => {
    console.log(e.target.id);
    e.target.id === "Home-link" && document.getElementById("Top").scrollIntoView();
    e.target.id === "About-link" && document.getElementById("Top").scrollIntoView();
    // console.log(document.getElementById("first").firstElementChild.innerHTML);
    console.log(document.getElementById("Services-component"))
    e.target.id === "Services-link" && document.getElementById("Services-component").scrollIntoView();
    // e.target.id === "Services-link" && document.getElementById("Services-component").scrollIntoView()
    // const position = window.pageYOffset;
    // setScrollPos(position);
    // console.log(window.screenTop)
    // scroller.scrollTo(window.screenTop);
    
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
          <Link to='/' className="Nav-text" id="Home-link" onClick={handleScroll}>Home</Link>
          <p className="Nav-text-seperator"> | </p>
          <Link to='/' className="Nav-text" id="About-link" onClick={handleScroll}>About Us</Link>
          <p className="Nav-text-seperator"> | </p>
          <Link to='/' className="Nav-text" id="Services-link" onClick={handleScroll}>Services</Link>
          <div className="Nav-button">
            <Link to='/quote' className="Quote-button-text">Get a quote!</Link>
          </div>
        </nav>
    }
    {/* {location.pathname === '/quote' && <QuoteForm />} */}
    {console.log(location.pathname === '/quote')}
    {location.pathname === '/quote' ? <div></div> : <div id="first"><FirstSection /></div>}
    </div>
  )
}

export default NavBar;