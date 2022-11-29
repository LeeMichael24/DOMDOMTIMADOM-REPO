import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
/* import carousel from "./components/RecibeFormulario3/RecibeFormulario2/valoracion/valoracion"; */
import RecibeFormulario3 from "./components/RecibeFormulario3/RecibeFormulario2-3";
import RecibeFormularioP from './components/ComponenteFomularioPrueba/RecibeFormularioP';
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import FeedView from "./views/FeedView/FeedView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import AuthView from "./views/AuthView/AuthView";


function App() {
 

  return (
    <section className="App">
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<FeedView />}> </Route>
          <Route path="f2" element={<RecibeFormulario3 />}> </Route>
          <Route path="fp" element={<RecibeFormularioP />}> </Route>

          <Route path="*" element={<NotFoundView />}> </Route>
          <Route path="auth/*" element={<AuthView />}> </Route>
        </Routes>
      </main>
      
      <Footer />

      <modal/>
    </section>
  )
}

export default App;