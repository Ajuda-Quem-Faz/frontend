import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
import Aboutus from './pages/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaProduto from './components/produto/listaproduto/ListaProduto';
import DeletarProduto from './components/produto/deletarproduto/DeletarProduto';



function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/produtos" element= {<ListaProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
