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

  var Skeleton = (
    <SwiperSlide>
      <div className="flex-col items-center justify-center rounded-[3rem] animate-pulse">
        <div className="card-main">
          <div className="bg-gray-200 flex flex-col items-center h-32 min-[375px]:h-46 sm:h-48 md:h-56 w-full md:rounded-[3rem] rounded-3xl" />
        </div>
        <div className="flex flex-col mt-2 items-center justify-center gap-1">
          <div>
            <div className="font-semibold text-center h-[0.85lh] mb-1 rounded-2xl bg-gray-200" />
            <div className="font-semibold text-center h-[0.85lh] rounded-2xl w-24" />
          </div>
          <div className="flex justify-between items-center w-full flex-row-reverse px-4">
            <div className="p-2 px-5 rounded-2xl bg-gray-200">
              <div className="size-[14px]" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs tabular-nums bg-gray-200 rounded-2xl h-[1lh] w-[70px]"></div>
              <div className=" font-semibold bg-gray-200 rounded-2xl h-[0.85lh] mt-0.5 w-[72px]"></div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );

  function loading() {
    var loading = [];
    for (let i = 0; i < 4; i++) {
      loading.push(Skeleton);
    }
    return loading;
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
      {produto.length === 0 && (
        <>
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
            <div>{loading()}</div>
          </Swiper>
        </>
      )}
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
