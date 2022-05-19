import React, { useEffect, useState } from "react";

const TopBar = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText('bckeyz@yahoo.com')
    .then(() => { alert('Copied email to clipboard')});
  }

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('7026828822')
    .then(() => { alert('Copied phone number to clipboard')});
  }
  return (
    <div id="Top">
        <div className="Top-bar">
            <a href="https://www.google.com/maps/place/Boulder+City+Lock+And+Key/@35.9743439,-114.8451608,17z/data=!3m1!4b1!4m5!3m4!1s0x80c92ad585831789:0x32847d69817ff149!8m2!3d35.9743396!4d-114.8429721
" className="Address">916 Nevada Way Suite 4, Boulder City, NV 89005</a>
          <div className="Phone-number" onClick={copyPhoneNumber}>(702) 682 - 8822</div>
          <div className="Logos">
            <div className="Instagram-wrapper">
              <a href="https://www.instagram.com/bclockskeysguns/">
                <img src="https://www.designbust.com/download/1006/png/instagram_logo_transparent_background_png512.png" className="Instagram-logo"></img>
              </a>
              <div>Follow us!</div>
            </div>
            <div className="Email-wrapper">
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="Instagram-logo" onClick={copyEmail}></img>            
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopBar;