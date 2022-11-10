import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
import Banner from "./components/Banner/Banner";



function App() {
  return (
    <div className={classes["App"]}>

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Banner />
        <Feed />
      </main>
      {/* Footer */}

      <Footer />

      

    </div>
  )
}

export default App
