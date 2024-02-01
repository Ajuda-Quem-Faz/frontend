import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DotsThree, PencilSimple, TrashSimple } from '@phosphor-icons/react';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const [Show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-between overflow-hidden border-2 border-primary-orangeLight rounded-3xl relative">
      <DotsThree
        size={32}
        className="absolute right-0 top-0 m-2 bg-primary-orangeLight bg-opacity-0 hover:bg-opacity-100 rounded-full z-10"
        onClick={() => setShow(!Show)}
      />
      <div className="py-2 flex flex-col">
        <p className="h-full px-8 text-2xl">Setor: {categoria.setor}</p>
        <p className="h-full px-8 text-xl">Serviço: {categoria.tipoServico}</p>
      </div>
      <div className={Show ? 'flex absolute right-0 p-2 pr-12' : 'hidden'}>
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-orange text-dark-blackLight hover:bg-primary-orangeDark"
        >
          <button>
            <PencilSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="flex px-2 rounded-e-full items-center justify-center w-full bg-red text-dark-blackLight hover:bg-opacity-80"
        >
          <button>
            <TrashSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;