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

import { ValidatorRouter } from './Validator/ValidatorRouter'

import { useState } from "react";



function App() {

  const [user, setuser] = useState(null) 

  const login = () => {
    setuser({
      id: 1,
      name: 'John'
    })
  }

  const logout = () => setuser(null)
 
  return (
    <section className="App">
      
      <Header />
      {
        user ? (
          <button onClick={logout}> Logout </button>
        ): (
          <button onClick={login}> Login </button>
        )
      }

      <main>
        <Routes>
          <Route path="/" element={<FeedView />}> </Route>
          <Route path="f2" element={<RecibeFormulario3 />}> </Route>
          <Route path="fp" element={
            <ValidatorRouter user={ user } redirectTo='/'>
              <RecibeFormularioP />
            </ValidatorRouter>
          }/>


          <Route path="*" element={<NotFoundView />}> </Route>
          <Route path="auth/*" element={<AuthView />}> </Route>
        </Routes>
      </main>
      <Footer />
    </section>
  )
}

export default App;