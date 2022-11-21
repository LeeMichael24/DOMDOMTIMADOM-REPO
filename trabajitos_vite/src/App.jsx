
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
import Banner from "./components/Banner/Banner";
import Form_page2 from "./components/Form_page2/form_page2"

import carousel from "./components/Form_page2/valoracion/valoracion";


function App() {
  return (
    <div className={classes["App"]}>

      {/* Header */}
      <Header />
      {/* Main */}
      <main>
       <Banner />
      
        <Feed />

      {/* <Form_page2 />  */}

       

      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
