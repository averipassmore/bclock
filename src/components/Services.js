import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="Services-component">
      <div className="Services">
          <h1 className="Services-title">Our Services</h1>
          <div className="Services-content">
            <div className="Services-cell">
              <div className="Services-image-background">
                <img src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png" className="Services-images"></img>
              </div>
              <h1>Automotive</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="Services-cell">
              <div className="Services-image-background">
                <img src="https://www.pngkey.com/png/full/1-11826_home-vector-black-and-white-house-logo-black.png" className="Services-images"></img>
              </div>
              <h1>Residential</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="Services-cell">
              <div className="Services-image-background">
                <img src="https://icon-library.com/images/business-building-icon-black/business-building-icon-black-3.jpg" className="Services-images"></img>
              </div>
              <h1>Commmercial</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="Services-cell">
              <div className="Services-image-background">
                <img src="https://images.vexels.com/media/users/3/147998/isolated/preview/91e1de59db769c7c782e5d803b80aa18-glock-pistol-grey-silhouette.png" className="Services-images"></img>
              </div>
              <h1>Guns</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services;

// residential/commercial rekeying, car opening residential/commercial, special order guns/ammo, 
// residential/commercial lockouts, key copying, new/used gun sales, safe combination changes,
// safe openings, copy a key (over a 1000s different key blanks, black rifle coffee dealer