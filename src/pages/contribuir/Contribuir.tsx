import { Link } from "react-router-dom";

function Contri() {
  return (
    <div>
      <div className=" bg-tertiary-blueLight w-full p-4">
        {/* Ex! */}

        <div className=" px-12">
          <h1 className="text-2xl text-secondary-purple font-semibold py-2">Contribua com quem faz acontecer!</h1>
          <p className="text-lg text-secondary-purpleDark">
            Valorizamos a importância das organizações não governamentais e
            acreditamos na capacidade de fazer a diferença. Por isso, oferecemos
            a opção de doações e contribuições diretamente em nossa plataforma.
            Mesmo que você não tenha interesse em adquirir um produto, ainda
            pode participar ativamente em causas significativas. Ao realizar
            doações, você está apoiando projetos e iniciativas que visam causar
            impacto positivo em diferentes áreas, como saúde e educação.
          </p>
        </div>
        <div className="flex lg:flex-row gap-2 px-2 sm:px-24 py-6 justify-around flex-col items-center">
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/croche%20em%20presidio.webp?updatedAt=1707223679314"
            alt="" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm"
          />
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/M%C3%BAsica,%20educa%C3%A7%C3%A3o%20periferia?updatedAt=1707223679654"
            alt="" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm"
          />
        </div>

        {/* Contribuição */}
        <div className=" px-12">
          <h1 className=" text-2xl text-secondary-purpleDark font-semibold py-2">Como contribuir?</h1>
          <p className="text-lg text-secondary-purple">
            A sua contribuição pode ser feita de 02 formas: enquanto adquire um
            produto ou doando. 
            <p className="text-lg text-secondary-purple">
            Enquanto você adquire um
            produto, pode optar por contribuir com um valor a mais, se assim
            desejar. Caso tenha interesse em ajudar algum projeto sem realizar a compra, basta selecionar algum produto da Ong na qual deseje contribuir e selecionar a opção "Doe para a ONG".
            <Link to="/produtos" className="ml-1 text-lg text-primary-orange hover:underline font-semibold">Clique aqui</Link> para ser redirecionado à página de produtos.
            </p>
          </p>
        </div>
        <div className="flex lg:flex-row gap-2 px-2 sm:px-24 py-6 justify-around flex-col items-center">
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/resgate%20e%20prote%C3%A7%C3%A3o%20animal.jpeg?updatedAt=1707223679516"
            alt="" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm"
          />
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/Artesanato%20Indigena.jpg?updatedAt=1707223679891"
            alt="" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm"
          />
        </div>
      </div>
      <div>
        <div className="bg-secondary-purpleLight text-tertiary-blueLight py-4 w-full">
          <div className="px-12">
            <h1 className="text-2xl font-semibold py-2">Anuncie seus produtos aqui!</h1>
            <p className="text-lg">
              Para vender produtos em nosso e-commerce, é necessário ser
              afiliado ao nosso site e oferecer
              itens de produção autoral. 
              <p className="text-lg">Essa iniciativa visa angariar recursos para impulsionar
              os projetos sociais da organização, proporcionando uma forma
              sustentável de financiamento.</p>
            </p>
          </div>
          <div className="flex lg:flex-row gap-2 px-2 sm:px-24 py-6 justify-around flex-col items-center m-0">
            <img
              src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/carteira%20em%20couro.jpg?updatedAt=1707224013736"
              alt="Bolsa artenasal feita em couro" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm lg:h-[21rem]"
            />
            <img
              src="https://ik.imagekit.io/ajudaquemfaz/Produtos/vasos/fechar-o-arranjo-de-vasos-modernos_23-2149646509.jpg?updatedAt=1707224518797"
              alt="Imagem com 4 vasos de cerâmica" className="shadow-2xl rounded-3xl sm:max-w-lg max-w-sm w-[40rem]"
            />
          </div>
          <div className="px-12">
            <h1 className=" text-2xl font-semibold py-2">Como anunciar?</h1>
            <p className="text-lg py-1">
              Para anunciar no site da Ajuda Quem Faz, é necessário ter um login
              exclusivo, esse login só pode ser gerado mediante um cadastro
              prévio. O processo é simples: entre em contato conosco através da
              aba de contatos, manifestando seu interesse. Após isso, aguarde
              nosso e-mail com as instruções e solicitações específicas
              relacionadas ao seu projeto.
            </p>
            <p className="text-lg pb-6">
              Ao seguir as diretrizes fornecidas, iremos criar seu cadastro com
              as devidas autorizações para anúncios. Assim que o processo
              estiver concluído, enviaremos os detalhes de login para o e-mail
              cadastrado. Estamos aqui para facilitar o seu engajamento em nosso
              site e esperamos ansiosos para colaborar com o seu projeto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contri;
