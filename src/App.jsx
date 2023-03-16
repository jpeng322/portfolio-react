import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import Scrollspy from "react-scrollspy"

import { useState, useEffect } from "react";

//components
import NavbarComp from './components/Navbar';
import Home from './pages/Home';
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadPage from "./pages/Load";
import Stopwatch from "./Stopwatch";
import LoadCat from "./LoadCat";

// import Random from "./components/Random";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // cat.style.display = "none";
      setLoading(false)
    }, 3600)
  }, []);

  return (
    <div className="App">
      {/* <LoadPage /> */}

      {loading ?

          <Stopwatch/>

        :
        <>
          <Stopwatch className=""/>
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <NavbarComp />
          {/* <Nav2 /> */}



        </>
      }

    </div >
  )
}

export default App
