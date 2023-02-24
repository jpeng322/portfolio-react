import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import NavbarComp from './components/Navbar';
import Home from './pages/Home';
import Skills from "./pages/Skills";

function App() {

  return (
    <div className="App">
      <NavbarComp />
      <Home />
      <Skills />
    </div>
  )
}

export default App
