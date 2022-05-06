import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <div>
        {/* <Route path="/" element={<Component />} */}
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default MainRoutes;