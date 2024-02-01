import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
import Aboutus from './pages/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
// import About from './pages/aboutus/Aboutus';

import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/categorias/ListaCategorias';
import FormularioCategoria from './components/formularioCategoria/FormularioCategoria';

function App() {
  return (
    <>
    <AuthProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaTemas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
        </Routes>
        {/* <About /> */}
        <Footer />
      </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
