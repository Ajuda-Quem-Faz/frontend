import {
  CurrencyCircleDollar,
  DotsThree,
  Heart,
  PencilSimple,
  ShoppingCart,
  TrashSimple,
  X,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
// import Produto from '../../../models/Produto';
import { MouseEventHandler, useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CartContext } from '../../../contexts/CartContext';
import { ToastAlerta } from '../../../utils/ToastAlerta';

// interface CardProduto {
//   produto: Produto;
// }

const CardProduto = (produto) => {
  const [Like, setLike] = useState(false);

  const [Show, setShow] = useState(false);

  const { usuario } = useContext(AuthContext);

  const { adicionarProduto, adicionarDoacao } = useContext(CartContext);

  function Curtir() {
    setLike(!Like);
  }

  const descricao = produto.usuario?.sobre;

  const [preco_final, setPrecoFinal] = useState(produto.preco);

  const [doacao, setDoacao] = useState(0);

  return (
    <div className="relative">
      <button
        className="absolute z-20 sm:mt-3 sm:mr-3 mt-1 mr-1 right-0 backdrop-blur-sm bg-dark-black bg-opacity-40 rounded-full sm:p-3 p-2 hover:bg-opacity-70"
        onClick={() => Curtir()}
      >
        <Heart
          className="text-primary-orangeLight text-xl sm:text-2xl"
          weight={Like ? 'fill' : 'bold'}
        />
      </button>
      <DotsThree
        size={32}
        className={
          usuario.id === produto.usuario?.id || usuario.usuario === 'root@root.com'
            ? 'cursor-pointer absolute left-4 top-2 mt-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white'
            : 'hidden'
        }
        onClick={() => setShow(!Show)}
      />
      <Popup
        trigger={
          <div className="flex-col items-center justify-center rounded-[3rem] relative cursor-pointer hover:text-primary-orangeDark">
            <div className="absolute flex-col w-full md:h-56 p-5 opacity-0 bg-opacity-20 transition text-white bg-dark-black md:hover:opacity-100 backdrop-blur-[2px] rounded-[3rem] backdrop-brightness-50">
              <h2 className=" font-bold lg:mb-5 mb-2 text-center w-8/12 mx-auto">
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
                className="flex flex-col items-center h-32 min-[375px]:h-46 sm:h-48 object-cover md:h-56 w-full md:rounded-[3rem] rounded-3xl shadow-lg"
              />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center gap-1">
              <h2 className=" font-semibold text-center min-h-[2lh]">{produto.nome}</h2>
              <div className="flex justify-between items-center w-full flex-row-reverse px-4">
                <Link
                  to={'/'}
                  className="w-auto text-center p-2 px-5 rounded-2xl bg-primary-orange text-white flex gap-3 items-center hover:brightness-110"
                  onClick={() => {
                    adicionarProduto(produto);
                    adicionarDoacao(produto.usuario, preco_final - produto.preco);
                  }}
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
        {(close) => (
          <>
            <button
              className="absolute right-0 top-0 me-1.5 mt-1.5 text-red-500 bg-red-300 rounded-full p-2 hover:bg-opacity-85 border-red-300 border"
              onClick={close}
            >
              <X size={20} weight="bold" />
            </button>
            <div className="flex flex-col gap-8 p-4 overflow-y-auto">
              <div className="produto grid sm:grid-cols-2 grid-cols-1 gap-8 items-stretch">
                <img
                  src={produto.foto}
                  alt={`foto do ${produto.nome}`}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="flex flex-col justify-between">
                  <div className="card-top">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-2xl font-semibold">{produto.nome}</h2>
                      <button onClick={() => Curtir()}>
                        {/* <Heart
                      className="text-primary-orangeLight rounded-full text-3xl"
                      weight={Like ? 'fill' : 'bold'}
                    /> */}
                      </button>
                    </div>
                    <h2 className="">{produto.descricao}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-1 flex-wrap mt-4">
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-sm">Preço base</p>
                        <h2 className=" font-semibold text-xl tabular-nums">
                          {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(produto.preco)}
                        </h2>
                      </div>
                      <div>
                        <p className="text-sm">Preço final</p>
                        <span className="flex flex-col">
                          <h2 className=" font-semibold text-xl tabular-nums">
                            {Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(preco_final)}
                          </h2>
                          {preco_final > produto.preco ? (
                            <span className="text-sm text-green-500 font-medium">
                              +
                              {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                              }).format(preco_final - produto.preco)}
                            </span>
                          ) : (
                            <span className="text-sm text-transparent">.</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-xs text-center mb-1">
                        Ajude adicionando um valor
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        <p
                          onClick={() => {
                            setPrecoFinal(preco_final + 5);
                          }}
                          className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                        >
                          R$5
                        </p>
                        <p
                          onClick={() => {
                            setPrecoFinal(preco_final + 10);
                          }}
                          className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                        >
                          R$10
                        </p>
                        <p
                          onClick={() => {
                            setPrecoFinal(preco_final + 15);
                          }}
                          className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                        >
                          R$15
                        </p>
                        <p
                          onClick={() => {
                            setPrecoFinal(preco_final + 25);
                          }}
                          className="cursor-pointer tabular-nums font-semibold h-full rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                        >
                          R$25
                        </p>
                      </div>
                      <div>
                        <Link
                          to={'/'}
                          onClick={() => {
                            adicionarProduto(produto);
                            close();
                            adicionarDoacao(produto.usuario, preco_final - produto.preco);
                          }}
                          className="flex items-center justify-center p-2 px-5 gap-2 rounded-2xl bg-primary-orange text-white hover:brightness-110 mt-3"
                        >
                          <ShoppingCart className="text-white text-3xl" weight="bold" />{' '}
                          Comprar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <DotsThree
                  size={32}
                  className={
                    usuario.id === produto.usuario?.id ||
                    usuario.usuario === 'root@root.com'
                      ? 'absolute left-0 top-0 mt-8 ml-8 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white cursor-pointer'
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
                    <p className=" text-justify">{descricao}</p>
                  </div>
                </div>
                <hr />
                <h3 className="text-2xl font-bold">Doe para {produto.usuario?.nome}</h3>
                <div className="flex w-full justify-between gap-2">
                  <div className="grid grid-cols-3 gap-1 place-items-center w-full *:cursor-pointer">
                    <p
                      onClick={() => setDoacao(doacao + 5)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$5
                    </p>
                    <p
                      onClick={() => setDoacao(doacao + 10)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$10
                    </p>
                    <p
                      onClick={() => setDoacao(doacao + 15)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$15
                    </p>
                    <p
                      onClick={() => setDoacao(doacao + 25)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$25
                    </p>
                    <p
                      onClick={() => setDoacao(doacao + 50)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$50
                    </p>
                    <p
                      onClick={() => setDoacao(doacao + 100)}
                      className="w-full font-semibold h-full text-xs rounded-2xl border-2 text-dark-blackLight grid place-items-center hover:bg-light-grayDark px-1"
                    >
                      R$100
                    </p>
                    {/* <div className="grid rounded-2xl border-2 text-dark-blackLight place-items-center hover:bg-light-grayDark  col-span-2 h-full items-center grid-cols-5 flex-grow gap-2">
                <h2 className="font-semibold ml-5 mr-2">R$</h2>
                <input
                  className="w-full col-span-4 font-semibold h-full text-xs px-1 bg-transparent focus:border-emerald-400"
                  type="number"
                  name="doacao"
                  id="doacao"
                />
              </div> */}
                  </div>
                  <div className="flex flex-col text-center cursor-pointer">
                    <h2>R${doacao}</h2>
                    <div
                      onClick={() => {
                        adicionarDoacao(produto.usuario, doacao);
                        ToastAlerta('Doação adicionada ao carrinho!', 'sucesso')
                        close();
                      }}
                      className="flex items-center justify-center p-3 gap-2 rounded-2xl bg-emerald-400 text-white hover:brightness-110 mt-2"
                    >
                      <CurrencyCircleDollar
                        className="text-white text-3xl"
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default CardProduto;
