import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
import carousel from "./components/Posts2/valoracion/valoracion";
import Formulario2 from "./components/Posts2/SinglePost2/Formulario2";
import FormularioPrueba from './components/FormularioPrueba/FormularioPrueba';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";




function App() {
  return (

    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}> </Route>
        <Route path="f2" element={<Formulario2/>}> </Route>
        {/* <Route path="fp" element={<FormularioPrueba/>}> </Route> */}

        
      </Routes>
  {/*     <FormularioPrueba/> */}
      <Footer />
    </Router>

  )
}

export default App;