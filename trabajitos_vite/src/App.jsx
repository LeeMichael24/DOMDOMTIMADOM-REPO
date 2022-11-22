import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
import formularioPrueba from "./components/FormularioPrueba/FormularioPrueba";
import carousel from "./components/Feed/Posts2/valoracion/valoracion";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";


import SinglePost from "./components/Feed/Posts /SinglePost/SinglePost";
import Posts2 from "./components/Feed/Posts2/Posts2";






function App() {
  return (

    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}> </Route>
{/*         <Route path="info" element={<Form_page2/>}> </Route>
        <Route path="visualForm" element={<Form_page2/>}> </Route> */}
        <Route path="m" element={<formularioPrueba/>}> </Route>

      </Routes>

      <Footer />
    </Router>

  )
}

export default App;