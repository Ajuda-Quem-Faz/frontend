import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

function CardAbout(pessoa: {
  nome: string;
  sobre: string;
  linkedin: string;
  github: string;
  imagem: string;
}) {
  return (
    <div className="bg-white shadow-2xl p-8 m-10 rounded-3xl flex md:flex-row flex-col-reverse">
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl sm:text-3xl font-bold">{pessoa.nome}</h4>
        <p className="sm:text-xl">{pessoa.sobre}</p>
      </div>

      <div className="sm:min-w-72">
        <img
          className="rounded-3xl w-full h-72 sm:h-72 sm:w-72 object-cover"
          src={pessoa.imagem}
          alt={`Foto de ${pessoa.nome}`}
        />
        <div className="flex justify-around my-5 sm:mb-0">
          <a href={`https://linkedin.com/in/${pessoa.linkedin}`}>
            <LinkedinLogo
              size={40}
              className=" hover:text-tertiary-blueDark transition delay-75"
            ></LinkedinLogo>
          </a>
          <a href={`https://github.com/${pessoa.github}`}>
            <GithubLogo
              size={32}
              className="hover:text-tertiary-blueDark transition delay-75"
            ></GithubLogo>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardAbout;
