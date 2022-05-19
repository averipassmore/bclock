import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import skelly from "../skellyLogo.png";
import { scroller } from "react-scroll/modules";

const FirstSection = () => {
  const scrollToSection = () => {
    if (window.pageYOffset < 721) {
      scroller.scrollTo("Services-component", {
        offset: -100
      })
    } else if (721 < window.pageYOffset < 1418) {
      scroller.scrollTo("Reviews-wrapper", {
        offset: -100
      })
    }
    console.log(window.pageYOffset)
  }

  return (
    <div id="First-section-component">
      <div className="Wrapper-div"></div>
      <div className="First-section">
        <p className="First-section-text">Best Locksmith and Gun Dealer in Southern Nevada</p>
        <div className="First-section-button">
          <Link to='/quote' className="First-section-button-text">Get a Quote!</Link>
        </div>
        <img src={skelly} className="Skelly-left" alt=""></img>
        <img src={skelly} className="Skelly-right" alt=""></img>
        <h1 className="First-section-text-2">"For all your security needs!"</h1>
      </div>
      <div className="First-section-footer">
        <button className="Navigate-down-button" onClick={scrollToSection}></button>
      </div>
      <Services />
    </div>
  )
}

export default FirstSection;