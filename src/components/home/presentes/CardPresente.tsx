import { Link } from 'react-router-dom';

function CardPresente(props: { imagem: string; nome: string; link: string }) {
  return (
    <Link to={`categorias/${props.link}`}>
      <div className="flex flex-col gap-2 justify-center items-center hover:brightness-95 hover:text-primary-orange">
        <img
          src={props.imagem}
          alt={props.nome}
          className="w-full md:h-48 h-32 object-cover rounded-3xl"
        />
        <h2>{props.nome}</h2>
      </div>
    </Link>
  );
}

export default CardPresente;
