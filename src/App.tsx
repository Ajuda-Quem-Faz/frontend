import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
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
