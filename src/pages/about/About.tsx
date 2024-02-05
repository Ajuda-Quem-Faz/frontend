import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function About() {



  return (
    <>
      {/* Cards */}
      <div className="w-full bg-light-grayDark">
        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 justify-between gap-2">

          {/* Missão */}
          <div className="flex flex-col bg-secondary-purple items-center text-center px-3 py-10 gap-10 min-h-80 rounded-2xl text-tertiary-blueLight">
            <h2 className="text-3xl font-bold text-tertiary-blueLight">
              Missão
            </h2>
            <p>
              Nossa missão é promover impacto social positivo ao conectar consumidores a
              produtos feitos por Organizações Não Governamentais (ONGs). Buscamos
              oferecer uma plataforma onde os consumidores possam adquirir produtos de
              alta qualidade, enquanto contribuem diretamente para causas sociais.
            </p>
          </div>

          {/* Visão */}
          <div className="flex flex-col bg-secondary-purple items-center text-center px-3 py-10 gap-10 min-h-80 rounded-2xl text-tertiary-blueLight">
            <h2 className="text-3xl font-bold text-tertiary-blueLight">
              Visão
            </h2>
            <p>
              Buscamos ser a principal referência global em comércio sustentável, onde
              cada produto vendido não apenas atende às necessidades dos consumidores, mas
              também contribui diretamente para a construção de um mundo mais justo e
              equitativo.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col bg-secondary-purple items-center text-center px-3 py-10 gap-10 min-h-80  rounded-2xl text-tertiary-blueLight">
            <h2 className="text-3xl font-bold">
              Valores
            </h2>
            <div>
              <p>Compromisso Social</p>
              <p>Emponderamento das Comunidades</p>
              <p>Sustentabilidade</p>
              <p>Inovação Social</p>
              <p>Transparência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historia */}

      <div className="py-10 text-center space-y-5 px-10">
        <h2 className="text-primary-orange text-3xl font-bold">
          Conheça nossa história</h2>
        <p>
          A equipe de desenvolvedores desse e-commerce foi composta por indivíduos com
          interesses comuns na área de tecnologia. A equipe se conheceu durante o bootcamp
          intensivo de Desenvolvimento Full-Stack da Generation Brazil. Cada membro trazia
          habilidades únicas, desde programação e design até gerenciamento de projetos. O
          destino os uniu quando foram sorteados para trabalhar em conjunto no projeto
          finaldo Bootcamp. O desafio do projeto do e-commerce de produtos de ONGs foi
          delineado com base nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU,
          especificamente na <b>ODS 1 - Erradicação da Pobreza</b>.
        </p>
      </div>

      {/*ODS - 1*/}

      <div className="flex flex-row bg-secondary-purple h-64 space-x-10">
        {/** Imagem */}
        <div className="w-64 flex-shrink-0">
          <img src="https://ik.imagekit.io/ajudaquemfaz/Equipe/top-view-origami-chain-people-with-globe.jpg?updatedAt=1706881066829" />
        </div>

        <div className="flex flex-col justify-center items-center space-y-6">
          <h2 className="text-2xl font-bold text-light-grayLight">
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

      </div>

      {/* Integrantes */}
      <div id="integrantes" className="flex flex-col my-10">

        <h2 className="text-3xl text-primary-orange font-bold text-center">Equipe de Desenvolvimento</h2>

        {/* Luiza */}
        <div className="flex p-4 bg-primary-orange">
          <div className=" w-64 flex-shrink-0">
            <img className="rounded-3xl border-secondary-purpleDark border-4"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/LuizaKormann.jpg?updatedAt=1706885301115"
              alt="Foto de Luiza Kormann" />
          </div>

          <div className="flex flex-col p-4 space-y-4 h-full">
            <h4 className="text-2xl font-bold text-center">Luiza Kormann</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>

            <div className="flex items-end justify-end">
              <a href="https://www.linkedin.com/in/luizakormann/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-tertiary-blueDark transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/luizakormann">
                <GithubLogo
                  size={32} className="hover:text-tertiary-blueDark transition delay-75"
                ></GithubLogo>
              </a>
            </div>
          </div>

        </div>

        {/* Pablo */}
        <div className="flex p-4 bg-secondary-purple text-white">
          

          <div className="flex flex-col p-4 space-y-4 h-full">
            <h4 className="text-2xl font-bold text-center">Pablo Maia</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>

            <div className="flex items-end justify-start">
              <a href="https://www.linkedin.com/in/pablo-hsm/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-tertiary-blueDark transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/pxmiddle">
                <GithubLogo
                  size={32} className="hover:text-tertiary-blueDark transition delay-75"
                ></GithubLogo>
              </a>
            </div>
            
          </div>

          <div className=" w-64 flex-shrink-0">
            <img className="rounded-3xl border-primary-orange border-4"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/PabloMaia.jpg?updatedAt=1706885318307"
              alt="Foto de Pablo Maia" />
          </div>

        </div>

        {/* Aline */}
        < div className="w-full flex flex-col-2" >
          <div className="w-80 h-80">
            <img
              className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Aline%20Conchetta.jpeg?updatedAt=1707154255911"
              alt="Foto de Aline Conchetta"></img>
            <div className="flex flex-col-2">
              <a href="https://www.linkedin.com/in/aline-conchetta/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-primary-orange transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/AlineConchetta">
                <GithubLogo
                  size={32} className="hover:text-primary-orange transition delay-75"
                ></GithubLogo>
              </a>
            </div>

          </div>

          <div className="text-dark-black rounded-3xl m-1 p-2">
            <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Aline Conchetta</h4>
            <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>
          </div>
        </div >

        {/* Vitor */}

        < div className="w-full flex flex-col-2" >
          <div className="text-dark-black rounded-3xl m-1 p-2">
            <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Vitor Nascimento</h4>
            <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>
          </div>

          <div className="w-80 h-80">
            <img
              className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Vitor%20Nascimento.jpeg?updatedAt=1707151136622"
              alt="Foto de Vitor Nascimento"></img>
            <div className="flex flex-col-2">
              <a href="https://www.linkedin.com/in/vitor-do-nascimento-ferreira/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-primary-orange transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/Vitornasc3">
                <GithubLogo
                  size={32} className="hover:text-primary-orange transition delay-75"
                ></GithubLogo>
              </a>
            </div>
          </div>
        </div >

        {/* Natan */}
        < div className="w-full flex flex-col-2" >
          <div className="w-80 h-80">
            <img
              className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Natan%20Oliveira.jpeg?updatedAt=1707155704905"
              alt="Foto de Natan Oliveira"></img>
            <div className="flex flex-col-2">
              <a href="https://www.linkedin.com/in/natan-oliveira-santos-7a5b47294/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-primary-orange transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/NatanOSantos">
                <GithubLogo
                  size={32} className="hover:text-primary-orange transition delay-75"
                ></GithubLogo>
              </a>
            </div>
          </div>

          <div className="text-dark-black rounded-3xl m-1 p-2">
            <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Natan Oliveira</h4>
            <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>
          </div>
        </div >

        {/* Matheus */}

        < div className="w-full flex flex-col-2" >
          <div className="text-dark-black rounded-3xl m-1 p-2">
            <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Matheus Teixeira</h4>
            <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
              nostrud exercitation
            </p>
          </div>

          <div className="w-80 h-80">
            <img
              className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/1702560502903.jpg?updatedAt=1707155977363"
              alt="Foto de Natan Oliveira"></img>
            <div className="flex flex-col-2">
              <a href="https://www.linkedin.com/in/mdteixeira15/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-primary-orange transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/mdteixeira">
                <GithubLogo
                  size={32} className="hover:text-primary-orange transition delay-75"
                ></GithubLogo>
              </a>
            </div>
          </div>
        </div >

        {/* Wallysson */}

        < div className="w-full flex flex-col-2" >
          <div className="w-80 h-80">
            <img
              className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Wallysson.jpg?updatedAt=1706807217747"
              alt="Foto de Wallysson Araujo"></img>
            <div className="flex flex-col-2">
              <a href="https://www.linkedin.com/in/wallysson-araujo/">
                <LinkedinLogo
                  size={40}
                  className=" hover:text-primary-orange transition delay-75"
                ></LinkedinLogo>
              </a>
              <a href="https://github.com/WallyssonChristian">
                <GithubLogo
                  size={32} className="hover:text-primary-orange transition delay-75"
                ></GithubLogo>
              </a>
            </div>

          </div>


          <div className="text-dark-black rounded-3xl m-1 p-2">
            <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Wallysson Araújo</h4>
            <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Amante de tecnologia e fascinado pelas possibilidades que ela gera. Desde criança 
            minha curiosidade me levou a explorar esse vasto universo, criando jogos e pequenos 
            scripts, só para ver minha arte por de trás de uma tela.
            </p>
          </div>
        </div >

      </div>

    </>
  );
}

export default About;
