import React from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import FirstSection from "./FirstSection";
import QuoteForm from "./QuoteForm";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Router>
      <TopBar />
      <NavBar /> 
      <Routes>
        <Route exact path='/' element={<FirstSection />}/>
        <Route exact path='/quote' element={<QuoteForm />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainRoutes;