import { useEffect } from 'react';
import Ideia from '../../components/home/info/Info';
import Produtos from '../../components/home/produtos-carousel/Carousel-container';
import Presentes from '../../components/home/presentes/Presentes';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.title = 'Ajuda quem Faz - Início';
  }, []);
  return (
    <>
      <div className="lg:flex justify-between bg-light-gray">

      </div>
      <div id="imagem" className="grid object-cover place-content-center">
        <Link to={`/about`}>
          <img
            src="https://ik.imagekit.io/gwq8l9cqx/Banner%20de%20site%20promo%C3%A7%C3%A3o%20de%20ver%C3%A3o%20moderno%20azul%20e%20amarelo%20(1472%20x%20431%20px)%20(2).gif?updatedAt=1707140463109"
            alt="Banner Ajuda Quem faz"
          />
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 py-16 px-1">
        <Produtos />
        <Presentes />
        <Ideia />
      </div>
    </>
  );
}

export default Home;
