function CardPresente(props: { imagem: string; nome: string }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img
        src={props.imagem}
        alt={props.nome}
        className="w-full md:h-48 h-32 object-cover rounded-3xl"
      />
      <h2>{props.nome}</h2>
    </div>
  );
}

export default CardPresente;
