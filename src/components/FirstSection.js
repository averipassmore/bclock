import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import skelly from "../skellyLogo.png";

const FirstSection = () => {
  return (
    <div id="First-section-component">
      <div className="Wrapper-div"></div>
      <div className="First-section">
        <p className="First-section-text">Best Locksmith and Gun Dealer in Southern Nevada</p>
        <button className="First-section-button" type="submit">Get a quote!</button>
        <img src={skelly} className="Skelly-left"></img>
        <img src={skelly} className="Skelly-right"></img>
        <h1 className="First-section-text-2">"For all your security needs!"</h1>
      </div>
      <div className="First-section-footer">
        <a href="#Services-component" className="Navigate-down-button"></a>
      </div>
      <Services />
    </div>
  )
}

export default FirstSection;