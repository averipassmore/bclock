import React from "react";
import Reviews from "./Reviews";

const Services = () => {
  return (
    <div>
      <div id="Services-component">
        <div className="Services">
            <h1 className="Services-title">Our Services</h1>
            <div className="Services-content">
              <div className="Services-cell">
                <div className="Services-image-background">
                  <img src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png" alt="" className="Services-images"></img>
                </div>
                <h1>Automotive</h1>
                <ul>
                  <li>&nbsp;&nbsp;&nbsp;24/7 Emergency Service</li>
                  <li>&nbsp;&nbsp;&nbsp;Lockouts</li>
                  <li>&nbsp;&nbsp;&nbsp;Key Copying</li>
                  <li>&nbsp;&nbsp;&nbsp;Antiques</li>
                </ul>
              </div>
              <div className="Services-cell">
                <div className="Services-image-background">
                  <img src="https://www.pngkey.com/png/full/1-11826_home-vector-black-and-white-house-logo-black.png" alt="" className="Services-images"></img>
                </div>
                <h1>Residential</h1>
                <ul>
                  <li>&nbsp;&nbsp;&nbsp;24/7 Emergency Service</li>
                  <li>&nbsp;&nbsp;&nbsp;Lockouts</li>
                  <li>&nbsp;&nbsp;&nbsp;Key Copying</li>
                  <li>&nbsp;&nbsp;&nbsp;Lock Changes and Rekeying</li>
                  <li>&nbsp;&nbsp;&nbsp;Safe Openings and Combination Changes</li>
                </ul>
              </div>
              <div className="Services-cell">
                <div className="Services-image-background">
                  <img src="https://icon-library.com/images/business-building-icon-black/business-building-icon-black-3.jpg" alt="" className="Services-images"></img>
                </div>
                <h1>Commmercial</h1>
                <ul>
                  <li>&nbsp;&nbsp;&nbsp;24/7 Emergency Service</li>
                  <li>&nbsp;&nbsp;&nbsp;Lockouts</li>
                  <li>&nbsp;&nbsp;&nbsp;Key Copying</li>
                  <li>&nbsp;&nbsp;&nbsp;Lock Changes and Rekeying</li>
                  <li>&nbsp;&nbsp;&nbsp;Safe Openings and Combination Changes</li>
                </ul>
              </div>
              <div className="Services-cell">
                <div className="Services-image-background">
                  <img src="https://images.vexels.com/media/users/3/147998/isolated/preview/91e1de59db769c7c782e5d803b80aa18-glock-pistol-grey-silhouette.png" alt="" className="Services-images"></img>
                </div>
                <h1>Guns</h1>
                <ul>
                  <li>&nbsp;&nbsp;&nbsp;Licensed FFL Dealer</li>
                  <li>&nbsp;&nbsp;&nbsp;Buy, Sell, or Trade!</li>
                  <li>&nbsp;&nbsp;&nbsp;Special Order Guns and Ammo</li>
                  <li>&nbsp;&nbsp;&nbsp;Black Rifle Coffee Distributor</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default Services;

// residential/commercial rekeying, car opening residential/commercial, special order guns/ammo, 
// residential/commercial lockouts, key copying, new/used gun sales, safe combination changes,
// safe openings, copy a key (over a 1000s different key blanks, black rifle coffee dealer