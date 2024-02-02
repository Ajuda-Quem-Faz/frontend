import { DotsThree, Heart, PencilSimple, ShoppingCart, TrashSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useState } from 'react';

interface CardProduto {
  produto: Produto
}

const CardProduto = (produto: Produto) => {
  const [Like, setLike] = useState(false);
  const [Show, setShow] = useState(false);

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

        <div className="absolute flex-col w-full h-56 p-5 opacity-0 bg-opacity-20 transition text-light-gray bg-dark-black hover:opacity-100 backdrop-blur-[2px] rounded-[3rem]">
          <h2 className="text-xl font-bold lg:mb-5 mb-2 text-center">{produto.nome}</h2>
          <h2 className="text-lg">{produto.descricao}</h2>

        </div>
        <div className="card-main">
          <img
            src={produto.foto}
            alt=""
            className="flex flex-col items-center justify-end object-cover h-56 w-full rounded-[3rem] "
          />
        </div>
        <div className="flex flex-col mt-5 items-center justify-center gap-1">
          <h2 className="text-xl font-bold">{produto.nome}</h2>
          <h2 className="text-lg font-bold">{`R$ ${(produto.preco.toFixed(2)).toString()}`}</h2>
          <div className="flex justify-around items-center w-full mb-5">
            <Link
              to={'produto.id'}
              className="w-auto text-xl text-center p-2 px-5 rounded-2xl bg-primary-orange text-light-gray flex gap-3 items-center hover:bg-primary-orangeDark"
            >
              Comprar
              <ShoppingCart className="text-light-gray" weight="bold" />
            </Link>
          </div>
          <DotsThree
          size={32}
          className="absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white"
          onClick={() => setShow(!Show)}
        />
        <div className={Show ? 'flex  left-12 p-2 pt-5' : 'hidden'}>
        <Link to={`/editarProduto/${produto.id}`} className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-orange text-dark-blackLight hover:bg-primary-orangeDark">
            <button>
              <PencilSimple size={32} weight="bold" className="p-2" />
            </button>
          </Link>
          <Link to={`/deletarproduto/${produto.id}`}>
            <button className="flex px-2 rounded-e-full items-center justify-center w-full bg-red text-dark-blackLight hover:bg-opacity-80">
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
