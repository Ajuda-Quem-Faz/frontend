import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import Produto from '../../../models/Produto';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';

interface CardProdutosProps {
  item: any;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);

  const [quantidade, setQuantidade] = useState<number>(1);

  const [notificacaoExibida, setNotificacaoExibida] = useState(false);

  const ConfirmacaoRemoverProduto: React.FC<{ onConfirm: () => void }> = ({
    onConfirm,
  }) => {
    const handleConfirmar = () => {
      onConfirm();
      toast.dismiss();
    };

    return (
      <div className="">
        <p className="mb-4 text-lg">Tem certeza que deseja remover o produto?</p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
            onClick={handleConfirmar}
          >
            Sim
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
            onClick={() => {
              toast.dismiss();
              setNotificacaoExibida(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const handleRemoverProduto = (id: number) => {
    if (!notificacaoExibida) {
      toast(
        <ConfirmacaoRemoverProduto
          onConfirm={() => {
            removerProduto(id);
            setNotificacaoExibida(false);
          }}
        />,
        {
          autoClose: false,
        }
      );

      setNotificacaoExibida(true);
    }
  };

  const incrementar = () => {
    if (quantidade < 99) {
      setQuantidade(quantidade + 1);
    } else {
      ToastAlerta('Quantidade máxima atingida!', 'info');
    }
  };

  const decrementar = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    } else {
      handleRemoverProduto(item.id);
    }
  };

  return (
    // Card do Produto
    <div className="flex flex-col rounded-lg overflow-hidden justify-between bg-tertiary-blueLight">
      {/** Parte de cima  <p className='text-sm italic text-center'>Quantidade: </p> */}
      <div className="py-4">
        {item.sobre && (
          <div className="text-xl text-center font-bold uppercase">
            <h3 className="text-2xl h-full pt-5 text-center font-bold uppercase">
              Doação
            </h3>
          </div>
        )}
        <img
          src={item.foto}
          className="mt-1 h-40 max-w-75 mx-auto rounded-lg"
          alt={item.nome}
        />
        <div className="p-4">
          <p className="text-sm text-center uppercase">{item.nome}</p>
          {item.preco && (
            <h3 className="text-xl text-center font-bold uppercase">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.preco)}
            </h3>
          )}
          {item.sobre && (
            <div className="text-xl text-center font-bold uppercase">
              <h3 className="text-3xl h-full pt-5 text-center font-bold uppercase">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.sobre)}
              </h3>
            </div>
          )}

          {/** Quantidade */}
          {item.preco && (
            <div className="flex justify-center items-center p-1">
              <p className="text-sm justify-start">Quantidade: </p>
              <div className="flex justify-items-end items-center">
                <button
                  onClick={incrementar}
                  className="text-white bg-green-500 hover:bg-green-600 font-bold text-2xl w-8 h-8 rounded-lg mx-2 flex-shrink-0"
                >
                  +
                </button>
                <p className="text-2xl w-6 h-12 flex items-center justify-center">
                  {quantidade}
                </p>
                <button
                  onClick={decrementar}
                  className=" text-white bg-red-500 hover:bg-red-600 font-bold text-2xl w-8 h-8 rounded-lg mx-2 flex-shrink-0"
                >
                  -
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/** Botão Remover */}
      <div className="flex flex-wrap">
        <button
          className="w-full text-slate-100 bg-red-500 hover:bg-red-700 
                       flex items-center justify-center py-2"
          onClick={() => {
            handleRemoverProduto(item.id);
          }}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default CardCart;
