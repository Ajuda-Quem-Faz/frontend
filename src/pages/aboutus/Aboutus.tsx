import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function About() {
  return (
    <>
      {/* Cards */}
      <div className="w-full bg-light-grayDark rounded-b-3xl">
        <div className="p-20 grid grid-cols-1 lg:grid-cols-3 justify-between gap-2">
          {/* Missão */}
          <div className="bg-secondary-purple grid place-items-center rounded-3xl">
            <h2 className="mt-[30px] font-bold text-[30px] text-tertiary-blueLight">
              Missão
            </h2>
            <p className="mt-[39px] mb-[77px] text-center font-medium leading-7 text-tertiary-blueLight">
              Nossa missão é promover impacto social positivo ao conectar consumidores a
              produtos feitos por Organizações Não Governamentais (ONGs). Buscamos
              oferecer uma plataforma onde os consumidores possam adquirir produtos de
              alta qualidade, enquanto contribuem diretamente para causas sociais.
            </p>
          </div>
          {/* Visão */}
          <div className=" bg-secondary-purple grid place-items-center rounded-3xl">
            <h2 className="mt-[30px] font-bold text-[30px] text-tertiary-blueLight">
              Visão
            </h2>
            <p className="p-[40px] mb-[105px] text-center font-medium leading-7 text-tertiary-blueLight">
              Buscamos ser a principal referência global em comércio sustentável, onde
              cada produto vendido não apenas atende às necessidades dos consumidores, mas
              também contribui diretamente para a construção de um mundo mais justo e
              equitativo.
            </p>
          </div>
          {/* Valores */}
          <div className="bg-secondary-purple grid place-items-center rounded-3xl">
            <h2 className="mt-[40px] font-bold text-[30px] text-tertiary-blueLight">
              Valores
            </h2>
            <div className="mt-[42px] mb-[53px] text-center text-sky-100  font-medium leading-7 text-tertiary-blueLight">
              <p className="mb-[15px]">Compromisso Social</p>

              <p className="p-2 mt-[25px] mb-[25px]">Emponderamento das Comunidades</p>

              <p className="mt-[25px] mb-[25px]">Sustentabilidade</p>

              <p className="mt-[25px] mb-[25px]">Inovação Social</p>

              <p className="mt-[20px] mb-[53px]">Transparência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="mt-[42px]">
        <h2 className="text-primary-orange text-center text-[30px] font-bold">
          Conheça nossa história
        </h2>
        <p className="text-pretty mx-[15px] text-center mt-[30px] mb-[30px]">
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

      {/*OSD - 1*/}

      <div className="relative bg-secondary-purple w-full p-2 flex rounded-[30px] shadow mb-[50px]">
        <div>
          <div>
            <h2 className="mx-[25px] relative font-bold text-light-grayLight text-[30px] font-bold mt-[15px]">
              ODS 1- Erradicação da Pobreza
            </h2>
          </div>
          <div>
            <p className="mx-[25px] mr-[336px] absolute text-light-grayLight text-[25px] font-normal mt-[15px] leading">
              Assumindo a ODS 1 como norteadora, o grupo buscou desenvolver estratégias e
              soluções inovadoras que não apenas promovessem a comercialização de produtos
              das ONGs, mas também contribuíssem para o empoderamento econômico de
              comunidades carentes. O foco estava na criação de um modelo de negócios que
              não apenas proporcionasse sustento às ONGs, mas também impactasse
              positivamente as populações vulneráveis, promovendo a inclusão social e o
              desenvolvimento econômico sustentável.
            </p>
          </div>

          <div className="">
            <img
              className="w-[287px] h-[233px] rounded-3xl"
              src="https://ik.imagekit.io/ajudaquemfaz/Equipe/top-view-origami-chain-people-with-globe.jpg?updatedAt=1706881066829"
            ></img>
          </div>
        </div>
      </div>

      {/* Integrantes */}
      <h2 className="text-[30px] text-primary-orange font-bold text-center mb-[30px]">Equipe de Desenvolvimento</h2>

      {/* Luiza */}
      <div className="w-full flex flex-col-2">
        <div className="w-80 h-80 shadow">
          <img
            className="ml-[62px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/LuizaKormann.jpg?updatedAt=1706885301115"
            alt="Foto de Luiza Kormann"
          ></img>
          <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/luizakormann/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/luizakormann">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
      </div>
      <div className="text-dark-black rounded-3xl m-1 p-2">
        <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Luiza Kormann</h4>
        <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
          nostrud exercitation
        </p>
      </div>
    </div>


      {/* Pablo */ }
      < div className = "w-full flex flex-col-2" >
        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Pablo Maia</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi cing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis
            nostrud exercitation
          </p>
        </div>

        <div className="w-80 h-80">
          <img
            className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/PabloMaia.jpg?updatedAt=1706885318307"
            alt="Foto de Pablo Maia"
          ></img>
            <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/pablo-hsm/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/pxmiddle">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
        </div>
      </div >


    {/* Aline */ }
    < div className = "w-full flex flex-col-2" >
        <div className="w-80 h-80">
          <img className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Aline%20Conchetta.jpeg?updatedAt=1707154255911"
            alt="Foto de Aline Conchetta"></img>
            <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/aline-conchetta/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/AlineConchetta">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
            
        </div>

        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Aline Conchetta</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi
            cing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad min
            im veniam, quis nostrud exercitation</p>
        </div>
      </div >

    {/* Vitor */ }

    < div className = "w-full flex flex-col-2" >
        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Vitor Nascimento</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi
            cing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad min
            im veniam, quis nostrud exercitation</p>
        </div>

        <div className="w-80 h-80">
          <img className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Vitor%20Nascimento.jpeg?updatedAt=1707151136622"
            alt="Foto de Vitor Nascimento"></img>
            <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/vitor-do-nascimento-ferreira/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/Vitornasc3">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
        </div>
        </div >

    {/* Natan */ }
    < div className = "w-full flex flex-col-2" >
        <div className="w-80 h-80">
          <img className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Natan%20Oliveira.jpeg?updatedAt=1707155704905"
            alt="Foto de Natan Oliveira"></img>
            <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/natan-oliveira-santos-7a5b47294/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/NatanOSantos">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
        </div>

        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Natan Oliveira</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi
            cing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad min
            im veniam, quis nostrud exercitation</p>
        </div>
        </div >

    {/* Matheus */ }

    < div className = "w-full flex flex-col-2" >
        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Matheus Teixeira</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi
            cing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad min
            im veniam, quis nostrud exercitation</p>
        </div>
        
        <div className="w-80 h-80">
          <img className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/1702560502903.jpg?updatedAt=1707155977363"
            alt="Foto de Natan Oliveira"></img>
            <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/mdteixeira15/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/mdteixeira">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
        </div>
        </div >

    {/* Wallysson */ }

    < div className = "w-full flex flex-col-2" >
        <div className="w-80 h-80">
          <img className="mr-[80px] shadow-md rounded-1x1 border-spacing-1 border-light-gray"
            src="https://ik.imagekit.io/ajudaquemfaz/Equipe/Wallysson.jpg?updatedAt=1706807217747"
            alt="Foto de Wallysson Araujo">
              <div className= "flex flex-col-2">
          <Link to="https://www.linkedin.com/in/wallysson-araujo/">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
            <Link to= "https://github.com/WallyssonChristian">
              <GithubLogo 
              size={32} className="hover:text-primary-orange transition delay-75"
              ></GithubLogo>
            </Link>
          </div>
            </img>
        </div>

        <div className="text-dark-black rounded-3xl m-1 p-2">
          <h4 className="ml-[70px] font-bold leading-10 text-[25px]">Wallysson Araújo</h4>
          <p className="ml-[70px] mr-[50px] text-4xl text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipi
            cing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad min
            im veniam, quis nostrud exercitation</p>
        </div>
    </div >
  
    </>
  );
}

export default About;
