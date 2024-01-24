import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
import Aboutus from './pages/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import About from './components/about/About';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        {/* <About /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
