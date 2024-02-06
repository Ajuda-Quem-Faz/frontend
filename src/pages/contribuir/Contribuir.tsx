import { Link } from "react-router-dom";

function Contri() {
  return (
    <div>
      <div className=" bg-tertiary-blueLight w-full p-4">
        {/* Ex! */}

        <div className=" px-24">
          <h1 className=" text-2xl text-secondary-purpleDark font-semibold py-2">Contribua com quem faz acontecer!</h1>
          <p className=" text-xl text-secondary-purple">
            Valorizamos a importância das organizações não governamentais e
            acreditamos na capacidade de fazer a diferença. Por isso, oferecemos
            a opção de doações e contribuições diretamente em nossa plataforma.
            Mesmo que você não tenha interesse em adquirir um produto, ainda
            pode participar ativamente em causas significativas. Ao realizar
            doações, você está apoiando projetos e iniciativas que visam causar
            impacto positivo em diferentes áreas, como saúde e educação.
          </p>
        </div>
        <div className="flex flex-row gap-10 px-24 py-6 justify-around">
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/croche%20em%20presidio.webp?updatedAt=1707223679314"
            alt="" className=" rounded-3xl w-1/3"
          />
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/M%C3%BAsica,%20educa%C3%A7%C3%A3o%20periferia?updatedAt=1707223679654"
            alt="" className=" rounded-3xl w-1/3"
          />
        </div>

        {/* Contribuição */}
        <div className=" px-24">
          <h1 className=" text-2xl text-secondary-purpleDark font-semibold py-2">Como contribuir?</h1>
          <p className=" text-xl text-secondary-purple">
            A sua contribuição pode ser feita de 02 formas: enquanto adquire um
            produto ou pela página de projetos. 
            <p className=" text-xl text-secondary-purple">
            Enquanto você adquire um
            produto, pode optar por contribuir com mais um valor, se assim
            desejar. Caso não tenha interesse em adquirir um produto,
            <Link to="" className=" text-xl text-primary-orange"> clique aqui</Link> para ser direcionado a página de
            projetos.
            </p>
          </p>
        </div>
        <div className="flex flex-row gap-10 px-24 py-6 justify-around">
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/resgate%20e%20prote%C3%A7%C3%A3o%20animal.jpeg?updatedAt=1707223679516"
            alt="" className=" rounded-3xl w-1/3"
          />
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/Artesanato%20Indigena.jpg?updatedAt=1707223679891"
            alt="" className=" rounded-3xl w-1/3"
          />
        </div>
      </div>
      <div >
        <div className=" bg-secondary-purpleLight text-tertiary-blueLight p-4">
          <div className=" px-24">
            <h1 className=" text-2xl font-semibold py-2">Anuncie seus produtos aqui!</h1>
            <p className=" text-xl">
              Para vender produtos em nosso e-commerce, é necessário ser
              afiliado a uma organização não governamental (ONG) e oferecer
              itens que a própria ONG produza ou adquira com o propósito de
              revenda. Essa iniciativa visa angariar recursos para impulsionar
              os projetos sociais da organização, proporcionando uma forma
              sustentável de financiamento.
            </p>
          </div>
          <div className="flex flex-row gap-10 px-24 py-6 justify-around items-center">
            <img
              src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/carteira%20em%20couro.jpg?updatedAt=1707224013736"
              alt="" className=" rounded-3xl w-1/3 h-96 object-fill"
            />
            <img
              src="https://ik.imagekit.io/ajudaquemfaz/Como%20Contribuir%20e%20Vender/Artesanato%20Indigena%20-%20Vaso.jpg?updatedAt=1707224015033"
              alt=""className=" rounded-3xl w-1/3 h-96 object-cover"
            />
          </div>
          <div className=" px-24">
            <h1 className=" text-2xl font-semibold py-2">Como anunciar?</h1>
            <p className=" text-xl py-1">
              Para anunciar no site da Ajuda Quem Faz, é necessário ter um login
              exclusivo, esse login só pode ser gerado mediante um cadastro
              prévio. O processo é simples: entre em contato conosco através da
              aba de contatos, manifestando seu interesse. Após isso, aguarde
              nosso e-mail com as instruções e solicitações específicas
              relacionadas ao seu projeto.
            </p>
            <p className=" text-xl pb-6">
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