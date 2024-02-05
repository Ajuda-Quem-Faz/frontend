import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="grid text-center place-content-center pt-16 font-semibold">
      <div className="flex flex-col py-10 gap-10">
        <div className="flex gap-2 items-center text-xl mb-4 justify-center">
          <img src="/logo.png" className="size-16" alt="" />
          <h2>Ajuda quem faz</h2>
        </div>
        <hr />
        <div className="flex flex-col gap-10">
          <p className=" text-2xl">Ops, essa página não existe! :(</p>
          <Link
            className="text-primary-orange hover:text-primary-orangeDark hover:underline mt-5"
            to={'/home'}
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
