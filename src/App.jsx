import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import Scrollspy from "react-scrollspy";

import { useState, useEffect } from "react";

//components
import NavbarComp from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadPage from "./pages/Load";
import LoadingCat from "./LoadingCat";
import Internships from "./pages/Internships";

// import Random from "./components/Random";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

    }, 3600);
  }, []);



  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  // console.log(scrollPosition)
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <LoadingCat />
     ) : ( 
      <>

          <Home />
            <Skills scrollPosition={scrollPosition} />
            <Internships />
            <Projects />
          <Contact />
          <NavbarComp />
    
        </>
      )} 

      
    </div>
  );
}

export default App;
