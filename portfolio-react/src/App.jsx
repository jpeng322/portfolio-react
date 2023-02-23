import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import NavbarComp from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <NavbarComp />
      <Home />
    </div>
  )
}

export default App
