import { CurrencyCircleDollar } from '@phosphor-icons/react';

const CardOng = (props: {
  nome: string;
  localizacao: string;
  imagem: string;
  descricao: string;
}) => {
  return (
    <>
      <div className="flex flex-col items-center h-full grid-cols-2 p-2 pb-4 text-light-grayLight bg-primary-orange rounded-3xl">
        <div className="flex w-full items-center gap-4">
          <img
            src={props.imagem}
            width={80}
            height={80}
            className="h-16 rounded-full object-contain"
          ></img>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{props.nome}</h2>
              <h2 className="float-end">{props.localizacao}</h2>
            </div>
            <button className="h-full flex items-center justify-center bg-emerald-400 hover:bg-opacity-90 rounded-2xl pl-2">
              <p className="font-semibold">Doar</p>
              <CurrencyCircleDollar className="text-2xl size-10 p-1" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-justify mx-3 ">{props.descricao}</p>
      </div>
    </>
  );
};

export default CardOng;
