import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import FirstSectionBackground from "./FirstSectionBackground";
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
      {/* <Footer /> */}
    </Router>
  )
}

export default MainRoutes;