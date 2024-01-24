import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/Contact';
import Aboutus from './pages/aboutus/Aboutus';
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
<<<<<<< HEAD
import Cadastro from './pages/cadastro/cadastro';

=======
import Login from './pages/login/Login';
>>>>>>> fe12fa0ce837d5ee3da372a78871eae993ce96b0

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
<<<<<<< HEAD
                <Route path="/cadastro" element={<Cadastro />} />
=======
                <Route path='/login' element={<Login />}/>
>>>>>>> fe12fa0ce837d5ee3da372a78871eae993ce96b0
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
