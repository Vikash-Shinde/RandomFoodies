import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Locations from './components/Locations';
import Menu from './components/Menu';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/locations" element={<Locations />} /> 
        </Routes> 
        <Locations />
        <Footer/>
      </Router>

          {/* <About/>
          <Menu/>
          <Contact/>
          <Locations /> */}
    </>
  );
}

export default App;
