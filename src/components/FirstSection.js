import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

const FirstSection = () => {
  return (
    <div id="First-section-component">
      <div className="Wrapper-div"></div>
      <div className="First-section">
        <img src="https://ychef.files.bbci.co.uk/976x549/p087r1np.jpg" className="Background"></img>
        <p className="First-section-text">Best Locksmith and gun dealer in Southern Nevada!</p>
        <button className="First-section-button" type="submit">Get a quote!</button>
      </div>
      <div className="First-section-footer">
        <a href="#Services-component" className="Navigate-down-button"></a>
      </div>
      <Services />
    </div>
  )
}

export default FirstSection;