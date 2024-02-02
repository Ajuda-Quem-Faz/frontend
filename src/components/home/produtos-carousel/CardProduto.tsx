import { Heart, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useState } from 'react';

const CardProduto = (produto: Produto) => {
  const [Like, setLike] = useState(false);

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
          <h2 className="text-xl font-bold lg:mb-5 mb-2">{produto.nome}</h2>
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
          <h2 className="text-lg font-bold">R${produto.preco}</h2>
          <div className="flex justify-around items-center w-full mb-5">
            <Link
              to={'produto.id'}
              className="w-auto text-2xl text-center p-2 px-5 rounded-2xl bg-primary-orange text-light-gray flex gap-3 items-center hover:bg-primary-orangeDark"
            >
              Comprar
              <ShoppingCart className="text-light-gray" weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduto;
