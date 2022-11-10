import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DOMDOMTIMADOM from "./components/Main/Main"; 
import Feed from "./components/Feed/Feed";


function App() {
  return(
    <div className={classes["App"]}>

    {/* Header */}
    <Header />
    {/* Main */}
    <main>
      <Feed/>
    </main>
    {/* Footer */}

    <Footer />

    </div>
  )
}

export default App
