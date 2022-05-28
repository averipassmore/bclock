import React from "react";
import TopBar from "./TopBar";
import QuoteForm from "./QuoteForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Router>
      {/* <TopBar />
      <NavBar />  */}
      <Routes>
        <Route exact path='/' element={<TopBar />}/>
        <Route exact path='/quote' element={<QuoteForm />}/>
      </Routes>
    </Router>
  )
}

export default MainRoutes;