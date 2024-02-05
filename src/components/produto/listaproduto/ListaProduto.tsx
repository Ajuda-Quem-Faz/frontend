import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { buscarProdutos } from '../../../services/Service';
import CardProduto from '../../home/produtos-carousel/CardProduto';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);

  async function listarProduto() {
    await buscarProdutos('/produtos', setProduto);
  }

  useEffect(() => {
    listarProduto();
  }, [produto.length]);

  return (
    <>
      {produto.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <TailSpin
            visible={true}
            height="100"
            width="100"
            color="#ff9900"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
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
