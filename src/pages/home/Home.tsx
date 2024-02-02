import { useEffect } from 'react';
import Ideia from '../../components/home/info/Info';
import Projetos from '../../components/home/produtos-carousel/Carousel-container';
import Presentes from '../../components/home/presentes/Presentes';

function Home() {
  useEffect(() => {
    document.title = 'Ajuda quem Faz - Home';
  }, []);
  return (
    <>
      <div className="lg:flex justify-between bg-light-gray">
        <div>
          <div
            id="boasVindasHome"
            className="justify-center p-8 text-center text-secondary-purpleDark"
          >
            <h1 className="font-bold">Ajuda quem Faz</h1>
            <p id="textoBoasVindas" className="bottom-2.5">
              Que bom que você voltou! Mussum Ipsum, cacilds vidis litro abertis. Nullam
              volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat
              odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
              vulputate dapibus. Detraxit consequat et quo num tendi nada. Manduma
              pindureta quium dia nois paga.
            </p>
          </div>
        </div>
        <div id="imagem" className="grid object-cover place-content-center">
          <img
            src="https://images.unsplash.com/photo-1589051079002-b140a970f568?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cesto feito manualmente com mãos ao fundo"
          />
        </div>
      </div>
      <div className="container mx-auto">
      <Projetos />
        <Presentes />
        <Ideia />
      </div>
    </>
  );
}

export default Home;
