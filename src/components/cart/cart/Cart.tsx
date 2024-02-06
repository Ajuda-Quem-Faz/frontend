import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import CardCart from '../cardcart/CardCart';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function Cart() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const { items, limparCart } = useContext(CartContext);

  function finalizarCompra() {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    } else {
      limparCart();
    }
  }

  return (
    <div
      className="
                flex 
                flex-col
                justify-center
                px-5
                "
    >
      <h1 className="text-4xl text-center my-4">Carrinho de Compras</h1>
      <h2 className="text-2xl text-center my-4">
        {items.length === 0 ? 'O Carrinho está vazio!' : ''}
      </h2>
      <div
        className="container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {items.map((produto) => (
          <CardCart key={produto.id} item={produto} />
        ))}
      </div>

      <button
        className="rounded bg-primary-orange hover:bg-primary-orangeDark text-white w-1/4 py-2 mx-auto flex justify-center"
        type="submit"
        disabled={items.length === 0 ? true : false}
        onClick={finalizarCompra}
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Cart;
