import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <About />
        <NavBar/>
        <div className="min-h-[80vh]">
        <Routes>

        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
