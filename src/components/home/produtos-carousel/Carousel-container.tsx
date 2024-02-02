// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import CardProduto from './CardProduto';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';

export default function Projetos() {
  return (
    <>
      <div className="mx-auto flex mt-8 md:text-2xl justify-between">
        <h2 className="font-bold">Doe para projetos da sua região</h2>
        <Link to="" className=" text-primary-orange hover:underline text-nowrap">
          Ver mais
        </Link>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper container"
      >
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco="120.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco="15.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco="5.55"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco="72.90"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduto
            id={1}
            nome="Card 1"
            foto="https://www.cestariasregio.com.br/wp-content/uploads/2023/05/Vaso-Tucuma-3-PA-CESTARIAS-REGIO-1.jpg"
            descricao="Descrição 1"
            preco=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
