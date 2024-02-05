// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import CardProduto from './CardProduto';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Produto from '../../../models/Produto';
import { buscarProdutos } from '../../../services/Service';

export default function Produtos() {
  const [produto, setProduto] = useState<Produto[]>([]);

  async function listarProduto() {
    await buscarProdutos('/produtos', setProduto);
  }

  useEffect(() => {
    listarProduto();
  }, [produto.length]);

  return (
    <>
      <div className="md:text-2xl flex justify-between">
        <h2 className="font-bold text-secondary-purple">Produtos que você vai amar</h2>
        <Link to="/produtos" className=" text-primary-orange hover:underline text-nowrap">
          Ver mais
        </Link>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
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
        {produto.map((produto) => (
          <SwiperSlide key={produto.id}>
            <CardProduto
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              foto={produto.foto}
              categoria={produto.categoria}
              usuario={produto.usuario}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
