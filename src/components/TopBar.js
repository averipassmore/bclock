import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
        <div className="Top-bar">
          <p className="Address">916 Nevada Way Suite 4, Boulder City, NV 89005</p>
          <Link to={'/'} className="Phone-number">(702) 682 - 8822</Link>
          <div className="Logos">
            <img src="https://www.designbust.com/download/1006/png/instagram_logo_transparent_background_png512.png" className="Instagram-logo"></img>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="Instagram-logo"></img>
          </div>
        </div>
    </div>
  )
}

export default TopBar;