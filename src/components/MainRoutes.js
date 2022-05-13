import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import FirstSectionBackground from "./FirstSectionBackground";
import SecondSection from "./SecondSection"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Router>
      <div>
      <TopBar />
      </div>  
      <NavBar />
      <div>
        <FirstSectionBackground />
      </div>
      <div>
        <SecondSection/>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default MainRoutes;