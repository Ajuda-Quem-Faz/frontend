import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import CardCart from '../cardcart/CardCart';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function Cart() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [total, setTotal] = useState(0);

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
      <h1 className="text-3xl text-center my-4 font-medium text-primary-orange">
        Carrinho de Compras
      </h1>
      <hr />
      <h2 className="text-center mt-3">{items.length} itens</h2>
      <h2 className="text-2xl text-center my-4">
        {items.length === 0 ? 'O Carrinho está vazio!' : ''}
      </h2>
      <div
        // className="container mx-auto my-4 grid grid-cols-1
        //                     md:grid-cols-2 lg:grid-cols-5 gap-4"
        className="flex flex-col gap-3 pb-6 overflow-auto max-h-[55vh] mb-2 no-scrollbar w-full"
      >
        {items.map((produto) => (
          <CardCart key={produto.id} item={produto} />
        ))}
      </div>

      <h2 className="text-center">{total != 0 ? `Total: R$${total}` : ''}</h2>

      <button
        className="rounded bg-primary-orange hover:bg-primary-orangeDark text-white px-5 py-2 mx-auto flex justify-center disabled:cursor-not-allowed disabled:opacity-50"
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
