import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";

import Form_page2 from "./components/Form_page2/form_page2"

import carousel from "./components/Form_page2/valoracion/valoracion";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";


import SinglePost from "./components/Feed/Posts /SinglePost/SinglePost";






function App() {
  return (

    <Router>
      
      <Header />
     
      <Routes>
        <Route path="/" element={<Feed />}> </Route>
        
        <Route path="info" element={<Form_page2/>}> </Route>

        <Route path="form" element={<Form_page2/>}> </Route>
      </Routes>

      <Footer />
    </Router>

  )
}

export default App;