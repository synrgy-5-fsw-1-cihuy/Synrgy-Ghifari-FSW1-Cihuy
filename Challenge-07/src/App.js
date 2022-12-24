import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import NavbarHero from './components/NavbarHero';
import OurServices from './components/OurServices';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Cars from './components/Cars';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Home />}></Route>
          <Route path='/cars' element={<Cars />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
