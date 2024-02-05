import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
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
import FormularioProduto from './components/produto/formProduto/FormularioProduto';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/cart/cart/Cart';
import ScrollToTop from 'react-scroll-to-top';
import About from './pages/about/About';

function App() {
  return (
    <>
      <CartProvider>
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
                <Route path="/about" element={<About />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/produtos" element={<ListaProduto />} />
                <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
                <Route path="/cadastrarProduto" element={<FormularioProduto />} />
                <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <ScrollToTop
                smooth
                svgPath="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" color='white'
              />
            </div>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
