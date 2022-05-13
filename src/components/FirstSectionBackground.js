import React from "react";
import { Link } from "react-router-dom";

const FirstSectionBackground = () => {
  return (
    <div className="First-section">
      <img src="https://ychef.files.bbci.co.uk/976x549/p087r1np.jpg" className="Background"></img>
      <p className="First-section-text">Best Locksmith in Southern Nevada!</p>
      <p className="First-section-text-smaller">~Over 40 years of experience~</p>
      <button className="First-section-button">Get a quote!</button>
    </div>
  )
}

export default FirstSectionBackground;