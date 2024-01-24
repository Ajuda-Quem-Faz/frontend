import { Heart, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const CardProduto = (props: {
  nome: string;
  imagem: string;
  descricao: string;
  link: string;
  preco: number;
}) => {
  return (
    <>
      <div className="flex-col items-center justify-center h-100 py-8 shadow-lg rounded-[3rem]">
        <div className="absolute z-10 mt-3 mr-3 right-0 bg-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-70">
          <Heart className="text-white" weight="bold" size={40} />
        </div>
        <div className="absolute flex-col w-full h-64 p-5 opacity-0 bg-opacity-20 transition text-light-500 bg-dark-900 hover:opacity-100 backdrop-blur-[2px] rounded-[3rem]">
          <h2 className="text-3xl font-bold mb-5">{props.nome}</h2>
          <h2 className="text-xl">{props.descricao}</h2>
        </div>
        <div className="card-main">
          <img
            src={props.imagem}
            alt=""
            className="flex flex-col items-center justify-end object-cover h-64 w-96 rounded-[3rem] "
          />
        </div>
        <div className="flex flex-col mt-5 items-center justify-center gap-1">
          <h2 className="text-2xl font-bold">{props.nome}</h2>
          <h2 className="text-2xl font-bold">R${props.preco.toFixed(2)}</h2>
          <div className="flex justify-around items-center w-full mt-5">
            <Link
              to={props.link}
              className="w-auto text-2xl text-center x-auto btn bg-primary-500 text-light-500 flex gap-3 items-center hover:bg-orange-500"
            >
              Comprar
              <ShoppingCart className="text-light-500" weight="bold" size={32} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduto;
