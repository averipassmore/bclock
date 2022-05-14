import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import FirstSection from "./FirstSection";
import Services from "./Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <FirstSection />
      <Services/>      
    </Router>
  )
}

export default MainRoutes;