import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import CardAbout from './CardAbout';

function About() {
  return (
    <div>
      {/* Cards */}
      <div className="w-full bg-light-grayDark">
        <div className="lg:container lg:mx-auto lg:p-10 p-4 grid md:grid-cols-3 justify-between gap-2">
          {/* Missão */}
          <div className="flex flex-col bg-secondary-purple items-center px-3 py-10 gap-10 rounded-2xl text-tertiary-blueLight">
            <h2 className="text-2xl font-bold text-tertiary-blueLight">Missão</h2>
            <p className="text-justify mx-3">
              Promover impacto social positivo ao conectar consumidores a produtos feitos
              por Organizações Não Governamentais (ONGs). Buscamos oferecer uma plataforma
              onde os consumidores possam adquirir produtos de alta qualidade, enquanto
              contribuem diretamente para causas sociais.
            </p>
          </div>

          {/* Visão */}
          <div className="flex flex-col bg-secondary-purple items-center px-3 py-10 gap-10 rounded-2xl text-tertiary-blueLight">
            <h2 className="text-2xl font-bold text-tertiary-blueLight">Visão</h2>
            <p className="text-justify mx-3">
              Buscamos ser a principal referência global em comércio sustentável, onde
              cada produto vendido não apenas atende às necessidades dos consumidores, mas
              também contribui diretamente para a construção de um mundo mais justo e
              equitativo.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col bg-secondary-purple items-center px-3 py-10 gap-10 rounded-2xl text-tertiary-blueLight">
            <h2 className="text-2xl font-bold">Valores</h2>
            <div className="text-center space-y-5">
              <p className="">Compromisso Social</p>
              <p className="">Emponderamento das Comunidades</p>
              <p className="">Sustentabilidade</p>
              <p className="">Inovação Social</p>
              <p className="">Transparência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="container mx-auto">
        <div className="py-10 px-10">
          <h2 className="text-primary-orange text-3xl mb-3 font-bold">
            Conheça nossa história
          </h2>
          <p>
            A equipe de desenvolvedores desse e-commerce foi composta por indivíduos com
            interesses comuns na área de tecnologia. A equipe se conheceu durante o
            bootcamp intensivo de Desenvolvimento Full-Stack da Generation Brazil. Cada
            membro trazia habilidades únicas, desde programação e design até gerenciamento
            de projetos. O destino os uniu quando foram sorteados para trabalhar em
            conjunto no projeto finaldo Bootcamp. O desafio do projeto do e-commerce de
            produtos de ONGs foi delineado com base nos Objetivos de Desenvolvimento
            Sustentável (ODS) da ONU, especificamente na{' '}
            <strong>ODS 1 - Erradicação da Pobreza</strong>.
          </p>
        </div>

        {/*ODS - 1*/}

        <div className="flex md:flex-row flex-col-reverse gap-6 bg-secondary-purple p-4 m-2 rounded-3xl justify-center items-center">
          <div className="justify-evenly">
            <h2 className="text-2xl mb-4 font-bold text-light-grayLight">
              ODS 1- Erradicação da Pobreza
            </h2>
            <p className="text-light-grayLight">
              Assumindo a ODS 1 como norteadora, o grupo buscou desenvolver estratégias e
              soluções inovadoras que não apenas promovessem a comercialização de produtos
              das ONGs, mas também contribuíssem para o empoderamento econômico de
              comunidades carentes. O foco estava na criação de um modelo de negócios que
              não apenas proporcionasse sustento às ONGs, mas também impactasse
              positivamente as populações vulneráveis, promovendo a inclusão social e o
              desenvolvimento econômico sustentável.
            </p>
          </div>
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/top-view-origami-chain-people-with-globe.jpg?updatedAt=1706881066829"
            className="size-64 object-cover rounded-3xl float-end"
          />
        </div>

        {/* Integrantes */}
        <div id="integrantes" className="flex flex-col my-10">
          <h2 className="text-3xl text-primary-orange font-bold">
            Equipe de Desenvolvimento
          </h2>

          {/* Luiza */}
          <CardAbout
            nome="Luiza Kormann"
            linkedin="luizakormann"
            github="luizakormann"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/LuizaKormann.jpg?updatedAt=1706885301115"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/* Pablo Maia */}
          <CardAbout
            nome="Pablo Maia"
            linkedin="pablo-hsm"
            github="pxmiddle"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/PabloMaia.jpg?updatedAt=1706885318307"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/* Aline */}
          <CardAbout
            nome="Aline Conchetta"
            linkedin="Aline-conchetta"
            github="AlineConchetta"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/Aline%20Conchetta.jpeg?updatedAt=1707154255911"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/* Natan */}
          <CardAbout
            nome="Vitor Nascimento"
            linkedin="vitor-do-nascimento-ferreira"
            github="Vitornasc3"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/Vitor%20Nascimento.jpeg?updatedAt=1707151136622"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/* Natan */}
          <CardAbout
            nome="Natan Oliveira"
            linkedin="natan-oliveira-santos-7a5b47294"
            github="NatanOSantos"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/Natan%20Oliveira.jpeg?updatedAt=1707155704905"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/*  Wallysson Araujo */}
          <CardAbout
            nome="Wallysson Araújo"
            linkedin="wallysson-araujo"
            github="WallyssonChristian"
            imagem="https://ik.imagekit.io/ajudaquemfaz/Equipe/Wallysson.jpg?updatedAt=1706807217747"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
          {/* Matheus Teixeira */}
          <CardAbout
            nome="Matheus Teixeira"
            linkedin="mdteixeira15"
            github="mdteixeira"
            imagem="https://media.licdn.com/dms/image/D4D03AQHLgZebL_uvaA/profile-displayphoto-shrink_400_400/0/1702560502903?e=1712793600&v=beta&t=VqtgrX72wkZXMJRbYUInQdIDgthNrVj-Sr9kYh6EVJA"
            sobre={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum doloremque minus necessitatibus, amet tenetur aspernatur, nulla asperiores magnam beatae debitis quas labore, qui dolor nam? Fuga, corrupti natus eaque dolor non consectetur nihil consequatur id rerum culpa animi. Assumenda praesentium maxime nisi officia nihil dicta deleniti est accusamus cumque!'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
