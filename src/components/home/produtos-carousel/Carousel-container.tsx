// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardProduto from './CardProduto';
import { Link } from 'react-router-dom';

export default function Projetos() {
  return (
    <>
      <div className="container py-10 mx-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Doe para projetos da sua região</h2>
          <Link to="" className="text-2xl text-primary-500 hover:underline">
            Ver mais
          </Link>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={42}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="py-8 mySwiper"
        >
          <SwiperSlide>
            <CardProduto
              nome="Card 1"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 1"
              link=""
              preco={125.0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduto
              nome="Card 2"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 2"
              link=""
              preco={125.0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduto
              nome="Card 3"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 3"
              link=""
              preco={125.0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduto
              nome="Card 4"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 4"
              link=""
              preco={125.0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduto
              nome="Card 5"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 5, Descrição 5 Descrição 5 Descrição 5 Descrição 5 Descrição 5 Descrição 5 Descrição 5 Descrição 5 Descrição 5 "
              link=""
              preco={125.0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduto
              nome="Card 6"
              imagem="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
              descricao="Descrição 6"
              link=""
              preco={125.0}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
