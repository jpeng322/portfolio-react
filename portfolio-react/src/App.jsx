import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState, useEffect } from "react";

//components
import NavbarComp from './components/Navbar';
import Home from './pages/Home';
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import LoadPage from "./pages/Load";

const cat = document.querySelector("#ewo4eiA5X1Q1")
console.log(cat)
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // cat.style.display = "none";
      setLoading(false)
    }, 3700)
  }, []);

  return (
    <div className="App">
{/* <LoadPage /> */}
      {loading ? <LoadPage /> :
        <>
          <NavbarComp />
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </>}
    </div>
  )
}

export default App
