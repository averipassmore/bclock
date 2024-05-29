import React from "react";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <div id="Top">
        <div className="Top-bar">
            <a href="https://www.google.com/maps/place/Boulder+City+Lock+And+Key/@35.9743439,-114.8451608,17z/data=!3m1!4b1!4m5!3m4!1s0x80c92ad585831789:0x32847d69817ff149!8m2!3d35.9743396!4d-114.8429721
" className="Address">916 Nevada Way Suite 4, Boulder City, NV 89005</a>
          <div className="Phone-number"><a href="tel:+1702-241-8869">(702) 241 - 8869</a></div>
          <div className="Logos">
            <div className="Instagram-wrapper">
              <a href="https://www.instagram.com/bclockskeysguns/">
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" className="Instagram-logo"></img>
              </a>
            </div>
            {/* <div className="Email-wrapper"> */}
              <a href="mailto:bckeyz@yahoo.com">
                <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" className="Email-logo"></img>
              </a>            
            {/* </div> */}
          </div>
        </div>
        <NavBar />
    </div>
  )
}

export default TopBar;