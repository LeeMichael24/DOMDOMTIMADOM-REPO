import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
/* import carousel from "./components/RecibeFormulario3/RecibeFormulario2/valoracion/valoracion"; */
import RecibeFormulario3 from "./components/RecibeFormulario3/RecibeFormulario2-3";
import RecibeFormularioP from './components/ComponenteFomularioPrueba/RecibeFormularioP';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";



function App() {

  return (
    <section className="section-app">
        <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}> </Route>
        <Route path="f2" element={<RecibeFormulario3 />}> </Route>
        <Route path="fp" element={<RecibeFormularioP />}> </Route>
        
      </Routes>
      <Footer />
    </Router>
    </section>


  )
}

export default App;