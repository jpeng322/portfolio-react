import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import NavbarComp from './components/Navbar';
import Home from './pages/Home';
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App">
      <NavbarComp />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
