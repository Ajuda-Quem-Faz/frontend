import { CaretRight } from '@phosphor-icons/react';

const CardOng = (props: {
  nome: string;
  localizacao: string;
  imagem: string;
  descricao: string;
  link: string;
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
            <button className="h-full flex items-center text-dark-blackLight justify-center bg-tertiary-blue hover:brightness-110 rounded-2xl pl-3">
              <a href={props.link} target="_blank" className="font-semibold">
                Conhecer
              </a>
              <CaretRight className="size-10 p-2" weight="bold" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-justify mx-3 ">{props.descricao}</p>
      </div>
    </>
  );
};

export default CardOng;
