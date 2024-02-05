import {
  CurrencyCircleDollar,
  DotsThree,
  Heart,
  PencilSimple,
  ShoppingCart,
  TrashSimple,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CartContext } from '../../../contexts/CartContext';

interface CardProduto {
  produto: Produto;
}

const CardProduto = (produto: Produto) => {
  const [Like, setLike] = useState(false);

  const [Show, setShow] = useState(false);

  const [Doacao, setDoacao] = useState(0.0);

  const { usuario } = useContext(AuthContext);

  const { adicionarProduto } = useContext(CartContext)

  function Curtir() {
    setLike(!Like);
  }

  const [preco_final, setPrecoFinal] = useState(produto.preco);

  return (
    <>
      <button
        className="absolute z-50 mt-3 mr-3 right-0 backdrop-blur-sm bg-dark-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-70"
        onClick={() => Curtir()}
      >
        <Heart
          className="text-primary-orangeLight text-2xl"
          weight={Like ? 'fill' : 'bold'}
        />
      </button>
      <DotsThree
        size={32}
        className={
          usuario.id === produto.usuario?.id
            ? 'absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white'
            : 'hidden'
        }
        onClick={() => setShow(!Show)}
      />
      <Popup
        trigger={
          <div className="flex-col items-center justify-center rounded-[3rem] relative cursor-pointer">
            <div className="absolute flex-col w-full md:h-56 p-5 opacity-0 bg-opacity-20 transition text-white bg-dark-black md:hover:opacity-100 backdrop-blur-[2px] rounded-[3rem] backdrop-brightness-50">
              <h2 className=" font-bold lg:mb-5 mb-2 text-center">{produto.nome}</h2>
              <h2 className="text-lg h-30 line-clamp-4 overflow-hidden">
                {produto.descricao}
              </h2>
            </div>
            <div className="card-main">
              <img
                src={produto.foto}
                alt={`foto do ${produto.nome}`}
                className="flex flex-col items-center h-32 min-[375px]:h-46 sm:h-48 object-cover md:h-56 w-full md:rounded-[3rem] rounded-3xl shadow-lg"
              />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center gap-1">
              <h2 className=" font-semibold text-center min-h-[2lh]">{produto.nome}</h2>
              <div className="flex justify-between items-center w-full flex-row-reverse px-4">
                <Link
                  to={'/cart'}
                  className="w-auto text-center p-2 px-5 rounded-2xl bg-primary-orange text-white flex gap-3 items-center hover:brightness-110"
                  onClick={() => adicionarProduto(produto)}
                >
                  <ShoppingCart className="text-white" weight="bold" />
                </Link>
                <div className="flex flex-col">
                  <p className="text-xs tabular-nums">Preço base</p>
                  <h2 className=" font-semibold">
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(produto.preco)}
                  </h2>
                </div>
              </div>
              <div className={Show ? 'flex top-2 mt-3 absolute' : 'hidden'}>
                <Link
                  to={`/editarProduto/${produto.id}`}
                  className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-orange bg-opacity-80 text-white hover:bg-opacity-100"
                >
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
        }
        modal
      >
        <div className="flex flex-col gap-8 p-4 overflow-y-auto">
          <div className="produto grid sm:grid-cols-2 grid-cols-1 gap-8 items-stretch">
            <img
              src={produto.foto}
              alt={`foto do ${produto.nome}`}
              className="rounded-2xl object-cover w-full"
            />
            <div className="flex flex-col justify-between gap-6 w-full">
              <div className="card-top">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold">{produto.nome}</h2>
                  <button onClick={() => Curtir()}>
                    <Heart
                      className="text-primary-orangeLight rounded-full text-3xl"
                      weight={Like ? 'fill' : 'bold'}
                    />
                  </button>
                </div>
                <h2 className="">{produto.descricao}</h2>
              </div>
              <div className="flex items-center md:flex-nowrap w-full text-nowrap gap-2">
                <div className="flex w-full gap-2 items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-xs">Preço base</p>
                    <h2 className=" font-semibold text-lg tabular-nums">
                      {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(produto.preco)}
                    </h2>
                    <p className="text-xs">Preço final</p>
                    <h2 className=" font-semibold text-lg tabular-nums">
                      {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(preco_final)}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <p
                      onClick={() => {
                        setPrecoFinal(preco_final + 5);
                      }}
                      className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$5,00
                    </p>
                    <p
                      onClick={() => {
                        setPrecoFinal(preco_final + 10);
                      }}
                      className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$10,00
                    </p>
                    <p
                      onClick={() => {
                        setPrecoFinal(preco_final + 15);
                      }}
                      className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$15,00
                    </p>
                    <p
                      onClick={() => {
                        setPrecoFinal(preco_final + 25);
                      }}
                      className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$25,00
                    </p>

                    {/* <div className="h-full w-fit rounded-2xl border-2 text-dark-blackLight flex gap-3 items-center hover:bg-light-grayDark col-span-2 font-semibold justify-center">
                      R$
                      <input
                        className="bg-transparent"
                        placeholder="Seu valor"
                        type="number"
                        name="doacao"
                        defaultValue={doacao}
                        onChange={() => {}}
                      />
                    </div> */}
                  </div>
                </div>
                <div className="text-center flex flex-col justify-between">
                  <p className="text-xs">Comprar</p>
                  <Link
                    to={'/cart'} onClick={() => adicionarProduto(produto)}
                    className="grid size-16 text-center place-items-center rounded-3xl bg-primary-orange text-white hover:brightness-110"
                    
                  >
                    <ShoppingCart className="text-white text-3xl" weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

            <DotsThree
              size={32}
              className={
                usuario.id === produto.usuario?.id
                  ? 'absolute left-0 top-0 mt-8 ml-8 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white'
                  : 'hidden'
              }
              onClick={() => setShow(!Show)}
            />
            <div className={Show ? 'flex top-0 mt-8 ml-14 absolute' : 'hidden'}>
              <Link
                to={`/editarProduto/${produto.id}`}
                className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-orange bg-opacity-80 text-white hover:bg-opacity-100"
              >
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

          <hr />

          <div className="ong flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Sobre quem faz</h2>
            <div className="">
              <img
                className="rounded-3xl float-start size-32 mr-4 object-cover object-left border-2 border-primary-orange"
                src={produto.usuario?.foto}
              />
              <div>
                <p className="text-3xl font-bold">{produto.usuario?.nome}</p>
                <p className=" text-justify">{produto.usuario?.sobre}</p>
              </div>
            </div>
            <hr />
            <h3 className="text-2xl font-bold">Doe para {produto.usuario?.nome}</h3>
            <div className="flex w-full gap-3 justify-between">
              <div className="grid grid-cols-3 gap-1 place-items-center w-full">
                <p className="w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$5,00
                </p>
                <p className="w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$10,00
                </p>
                <p className="w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$15,00
                </p>
                <p className="w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$25,00
                </p>

                <div className="h-full w-full rounded-2xl border-2 text-dark-blackLight flex gap-3 items-center hover:bg-light-grayDark col-span-2 font-semibold justify-center">
                  R$
                  <input
                    className="w-24 bg-transparent"
                    placeholder="Seu valor"
                    type="number"
                    name="doacao"
                    defaultValue={Doacao}
                  />
                </div>
              </div>
              <div className="text-center flex flex-col justify-between">
                <p className="text-xs">Doar</p>
                <Link
                  to={'produto.id'}
                  className="grid size-16 text-center place-items-center rounded-3xl bg-emerald-500 text-white hover:brightness-110"
                >
                  <CurrencyCircleDollar className="text-white size-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default CardProduto;
