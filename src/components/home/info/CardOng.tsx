const CardOng = (props: {
  nome: string;
  localizacao: string;
  imagem: string;
  descricao: string;
}) => {
  return (
    <>
      <div className="flex flex-col items-center h-full grid-cols-2 gap-2 p-2 text-light-grayLight bg-primary-orange rounded-3xl">
        <div className="flex w-full items-center gap-4">
          <img
            src={props.imagem}
            width={80}
            height={80}
            className="size-12 rounded-full bg-primary-orangeLight"
          ></img>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{props.nome}</h2>
            <h2 className="float-end">{props.localizacao}</h2>
          </div>
        </div>
        <p className="mt-2 text-sm w-[90%]">{props.descricao}</p>
      </div>
    </>
  );
};

export default CardOng;
