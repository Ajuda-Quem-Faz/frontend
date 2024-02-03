import {
  Coin,
  CoinVertical,
  Coins,
  CurrencyCircleDollar,
  DotsThree,
  Heart,
  Money,
  PencilSimple,
  ShoppingCart,
  TrashSimple,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { func } from 'prop-types';

interface CardProduto {
  produto: Produto;
}

const CardProduto = (produto: Produto) => {
  const [Like, setLike] = useState(false);

  const [Show, setShow] = useState(false);

  const { usuario } = useContext(AuthContext);

  function Curtir() {
    setLike(!Like);
  }

  var preco_final = produto.preco;

  function DefinirPreco(add: number) {
    preco_final += add;
  }

  return (
    <>
      <Popup
        trigger={
          <div className="flex-col my-8 mx-2 items-center justify-center rounded-[3rem] relative">
            <div className="absolute z-10 mt-3 mr-3 right-0 backdrop-blur-sm bg-dark-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-70">
              <Heart
                className="text-primary-orangeLight text-2xl"
                weight={Like ? 'fill' : 'bold'}
                onClick={() => Curtir()}
              />
            </div>

            <div className="absolute flex-col w-full h-56 p-5 opacity-0 bg-opacity-20 transition text-white bg-dark-black hover:opacity-100 backdrop-blur-[2px] rounded-[3rem] backdrop-brightness-50">
              <h2 className="text-xl font-bold lg:mb-5 mb-2 text-center">
                {produto.nome}
              </h2>
              <h2 className="text-lg h-30 line-clamp-4 overflow-hidden">
                {produto.descricao}
              </h2>
            </div>
            <div className="card-main">
              <img
                src={produto.foto}
                alt={`foto do ${produto.nome}`}
                className="flex flex-col items-center justify-end object-cover h-56 w-full rounded-[3rem] shadow-lg"
              />
            </div>
            <div className="flex flex-col mt-5 items-center justify-center gap-1">
              <h2 className="text-xl font-semibold text-center min-h-[2lh]">
                {produto.nome}
              </h2>
              <div className="flex justify-between items-center w-full mb-5 flex-row-reverse px-4">
                <Link
                  to={'produto.id'}
                  className="w-auto text-xl text-center p-2 px-5 rounded-2xl bg-primary-orange text-white flex gap-3 items-center hover:brightness-110"
                >
                  <ShoppingCart className="text-white" weight="bold" />
                </Link>
                <div className="flex flex-col">
                  <p className="text-xs">Preço base</p>
                  <h2 className="text-xl font-semibold">{`R$ ${produto.preco
                    .toFixed(2)
                    .toString()}`}</h2>
                </div>
              </div>

              <DotsThree
                size={32}
                className={
                  usuario.id === produto.usuario?.id
                    ? 'absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white'
                    : 'hidden'
                }
                onClick={() => setShow(!Show)}
              />
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
        <div className="flex flex-col gap-8 p-4">
          <div className="produto grid grid-cols-2 gap-8">
            <img
              src={produto.foto}
              alt={`foto do ${produto.nome}`}
              className="rounded-[3rem]"
            />
            <div className="flex flex-col justify-between gap-1 w-full">
              <div className="card-top">
                <h2 className="text-2xl font-semibold mb-2">{produto.nome}</h2>
                <h2 className="text-xl">{produto.descricao}</h2>
              </div>
              <div className="flex justify-between items-center w-full text-nowrap">
                <div className="flex flex-col">
                  <p className="text-xs">Preço base</p>
                  <h2 className="text-xl font-semibold">{`R$ ${produto.preco
                    .toFixed(2)
                    .toString()}`}</h2>
                  <p className="text-xs">Preço final</p>
                  <h2 className="text-xl font-semibold">{`R$ ${preco_final
                    .toFixed(2)
                    .toString()}`}</h2>
                </div>

                <div className="grid grid-cols-3 h-full gap-1 place-items-center">
                  <p
                    onClick={() => {
                      preco_final += 5;
                    }}
                    className="text-sm cursor-pointer w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                  >
                    R$5,00
                  </p>
                  <p
                    onClick={() => {
                      preco_final += 10;
                    }}
                    className="text-sm cursor-pointer w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                  >
                    R$10,00
                  </p>
                  <p
                    onClick={() => {
                      preco_final += 15;
                    }}
                    className="text-sm cursor-pointer w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                  >
                    R$15,00
                  </p>
                  <p
                    onClick={() => {
                      preco_final += 25;
                    }}
                    className="text-sm cursor-pointer w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                  >
                    R$25,00
                  </p>

                  <div className="h-full w-full rounded-2xl border-2 text-dark-blackLight flex gap-3 items-center hover:bg-light-grayDark col-span-2 text-sm font-semibold justify-center">
                    R$
                    <input
                      className="w-24 bg-transparent"
                      placeholder="Seu valor"
                      type="number"
                    />
                  </div>
                </div>
                <div className="text-xs text-center flex flex-col justify-between">
                  <p>Comprar</p>
                  <Link
                    to={'produto.id'}
                    className="grid size-16 text-3xl text-center place-items-center rounded-3xl bg-primary-orange text-white hover:brightness-110"
                  >
                    <ShoppingCart className="text-white" weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

            <DotsThree
              size={32}
              className={
                usuario.id === produto.usuario?.id
                  ? 'absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white'
                  : 'hidden'
              }
              onClick={() => setShow(!Show)}
            />
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

          <hr />

          <div className="ong flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Sobre quem faz</h2>
            <div className="ong flex gap-4">
              <img
                className="rounded-3xl size-32 object-cover object-left border-2 border-primary-orange"
                src={produto.usuario?.foto}
              />
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold">{produto.usuario?.nome}</h3>
                <h3 className="text-xl text-justify">{produto.usuario?.sobre}</h3>
              </div>
            </div>
            <hr />
            <h3 className="text-2xl font-bold">Doe para {produto.usuario?.nome}</h3>
            <div className="flex w-full gap-3 justify-between">
              <div className="grid grid-cols-3 gap-1 place-items-center w-full">
                <p className="text-sm w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$5,00
                </p>
                <p className="text-sm w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$10,00
                </p>
                <p className="text-sm w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$15,00
                </p>
                <p className="text-sm w-full font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1">
                  R$25,00
                </p>

                <div className="h-full w-full rounded-2xl border-2 text-dark-blackLight flex gap-3 items-center hover:bg-light-grayDark col-span-2 text-sm font-semibold justify-center">
                  R$
                  <input
                    className="w-24 bg-transparent"
                    placeholder="Seu valor"
                    type="number"
                  />
                </div>
              </div>
              <div className="text-xs text-center flex flex-col justify-between">
                <p>Doar</p>
                <Link
                  to={'produto.id'}
                  className="grid size-16 text-3xl text-center place-items-center rounded-3xl bg-emerald-500 text-white hover:brightness-110"
                >
                  <CurrencyCircleDollar className="text-white" weight="bold" />
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
