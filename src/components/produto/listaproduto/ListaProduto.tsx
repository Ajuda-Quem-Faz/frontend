import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { buscarProdutos } from '../../../services/Service';
import CardProduto from '../../home/produtos-carousel/CardProduto';

function ListaProduto() {
  useEffect(() => {
    document.title = 'Ajuda quem Faz - Produtos';
  }, []);

  const [produto, setProduto] = useState<Produto[]>([]);

  async function listarProduto() {
    await buscarProdutos('/produtos', setProduto);
  }

  var Skeleton = (
    <div className="flex-col items-center justify-center rounded-[3rem] animate-pulse">
      <div className="card-main">
        <div className="bg-gray-200 flex flex-col items-center h-32 min-[375px]:h-46 sm:h-48 md:h-56 w-full md:rounded-[3rem] rounded-3xl" />
      </div>
      <div className="flex flex-col mt-2 items-center justify-center gap-1">
        <div className="font-semibold text-center min-h-[1lh] rounded-2xl w-32 bg-gray-200" />
        <div className="font-semibold text-center min-h-[1lh] rounded-2xl w-32" />
        <div className="flex justify-between items-center w-full flex-row-reverse px-4">
          <div className="p-2 px-5 rounded-2xl bg-gray-200">
            <div className="size-[14px]" />
          </div>
          <div className="flex flex-col">
            <div className="text-xs tabular-nums bg-gray-200 rounded-2xl h-[1lh] w-24"></div>
            <div className=" font-semibold bg-gray-200 rounded-2xl h-[1lh] mt-1 w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );

  function loading() {
    var loading = [];
    for (let i = 0; i < 10; i++) {
      loading.push(Skeleton);
    }
    return loading;
  }

  useEffect(() => {
    listarProduto();
  }, [produto.length]);

  return (
    <>
      {produto.length === 0 && (
        <div className="container mx-auto my-4 gap-1 grid grid-cols-2 min-[460px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 p-1">
          {loading()}
        </div>
      )}
      <div className="container mx-auto my-4 gap-1 grid grid-cols-2 min-[460px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 p-1">
        {produto.map((produto) => (
          <div className="card relative">
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              foto={produto.foto}
              usuario={produto.usuario}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListaProduto;
