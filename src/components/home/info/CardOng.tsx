const CardOng = (props: {
  nome: string;
  localizacao: string;
  imagem: string;
  descricao: string;
}) => {
  return (
    <>
      <div className="flex items-center h-full grid-cols-2 gap-4 p-5 text-light-grayLight bg-primary-orange rounded-3xl">
        <img
          src={props.imagem}
          width={80}
          height={80}
          className="w-32 h-32 rounded-full bg-primary-orangeLight"
        ></img>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold">{props.nome}</h2>
            <h2 className="font-bold">{props.localizacao}</h2>
          </div>
          <div className="flex items-center h-full">
            <p className="mt-2 text-sm w-[90%]">{props.descricao}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOng;
