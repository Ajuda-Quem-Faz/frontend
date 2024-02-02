import { DotsThree, Heart, PencilSimple, ShoppingCart, TrashSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardProduto {
  produto: Produto
}

const CardProduto = (produto: Produto) => {

  const [Like, setLike] = useState(false);

  const [Show, setShow] = useState(false);

  const { usuario } = useContext(AuthContext);

  function Curtir() {
    setLike(!Like);

  }

  return (
    <>
      <div className="flex-col my-8 mx-2 items-center justify-center rounded-[3rem] relative">
        <div className="absolute z-10 mt-3 mr-3 right-0 backdrop-blur-sm bg-dark-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-70">
          <Heart
            className="text-primary-orangeLight text-2xl"
            weight={Like ? 'fill' : 'bold'}
            onClick={() => Curtir()}
          />

        </div>

        <div className="absolute flex-col w-full h-56 p-5 opacity-0 bg-opacity-20 transition text-white bg-dark-black hover:opacity-100 backdrop-blur-[2px] rounded-[3rem] backdrop-brightness-50">
          <h2 className="text-xl font-bold lg:mb-5 mb-2 text-center">{produto.nome}</h2>
          <h2 className="text-lg h-30 line-clamp-4 overflow-hidden">{produto.descricao}</h2>
        </div>
        <div className="card-main">
          <img
            src={produto.foto}
            alt={`foto do ${produto.nome}`}
            className="flex flex-col items-center justify-end object-cover h-56 w-full rounded-[3rem] shadow-lg"
          />
        </div>
        <div className="flex flex-col mt-5 items-center justify-center gap-1">
          <h2 className="text-xl font-semibold text-center min-h-[2lh]">{produto.nome}</h2>
          <div className="flex justify-between items-center w-full mb-5 flex-row-reverse px-4">
            <Link
              to={'produto.id'}
              className="w-auto text-xl text-center p-2 px-5 rounded-2xl bg-primary-orange text-white flex gap-3 items-center hover:brightness-110"
            >
              <ShoppingCart className="text-white" weight="bold" />

            </Link>
            <h2 className="text-lg font-semibold">{`R$ ${(produto.preco.toFixed(2)).toString()}`}</h2>
          </div>

          <DotsThree
            size={32}
            className={(usuario.id === produto.usuario?.id) ? "absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white" : "hidden"}
            onClick={() => setShow(!Show)}
          />
          <div className={Show ? 'flex top-2 mt-3 absolute' : 'hidden'}>
          <Link to={`/editarProduto/${produto.id}`} className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-orange bg-opacity-80 text-white hover:bg-opacity-100">
              <button>
                <PencilSimple size={32} weight="bold" className="p-2" />
              </button>
            </Link>
            <Link to={`/deletarproduto/${produto.id}`}>
              <button className="flex px-2 rounded-e-full items-center justify-center w-full bg-red-800 bg-opacity-80 text-white hover:bg-opacity-100">
                <TrashSimple size={32} weight="bold" className="p-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduto;
