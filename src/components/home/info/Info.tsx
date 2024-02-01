import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardOng from './CardOng';

const Info = () => (
  <>
    <div className="flex flex-col xl:grid grid-cols-5 xl:gap-16 gap-4 p-8 lg:p-8 py-4 m-4 bg-light-grayDark rounded-3xl">
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold text-secondary-purple">Ajuda Quem Faz!</h2>
        <p className="text-xl text-justify">
          Somos um site de e-commerce com produtos produzidos e gerados por projetos
          sociais de todo país
        </p>
      </section>
      <section className="col-span-4">
        <h2 className="text-2xl font-semibold">
          Milhares de projetos sendo impulsionados por você! Conheça quem faz:
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            1: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="py-6"
        >
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 1, Teste card ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao '
              }
              nome={'Nome 1'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={'Texto card'}
              nome={'Nome 2'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 3, Teste card ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao '
              }
              nome={'Nome 3'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 4, Teste card ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao ao '
              }
              nome={'Nome 4'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </>
);

export default Info;
