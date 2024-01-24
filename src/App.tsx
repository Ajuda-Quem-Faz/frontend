import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/Contact';
import Aboutus from './pages/aboutus/Aboutus';
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {

  return (
    <>
        <BrowserRouter>
        <NavBar />
          <div>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path='/home' element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path='/login' element={<Login />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
