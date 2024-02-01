import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardOng from './CardOng';

const Info = () => (
  <>
    <div className="grid grid-cols-3 gap-16 px-16 py-10 bg-light-grayDark rounded-3xl">
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-5xl font-bold text-secondary-purple">Ajuda Quem Faz!</h2>
        <p className="mt-8 text-3xl">
          Somos um site de e-commerce com produtos produzidos e gerados por projetos
          sociais de todo país
        </p>
      </section>
      <section className="col-span-2">
        <h2 className="mb-8 text-4xl font-bold">
          Milhares de projetos sendo impulsionados por você! <br /> Conheça quem faz:
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="py-8 mySwiper"
        >
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit facilisis dolor ac blandit. Aenean libero sem, venenatis at dolor sed,suscipit accumsan libero. Nullam odio tortor, euismod finibus velit.'
              }
              nome={'Nome 1'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit facilisis dolor ac blandit. Aenean libero sem, venenatis at dolor sed,suscipit accumsan libero. Nullam odio tortor, euismod finibus velit Teste props 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit facilisis dolor ac blandit. Aenean libero sem, venenatis at dolor sed,suscipit accumsan libero. Nullam odio tortor, euismod finibus velit.'
              }
              nome={'Nome 2'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit facilisis dolor ac blandit. Aenean libero sem, venenatis at dolor sed,suscipit accumsan libero. Nullam odio tortor, euismod finibus velit.'
              }
              nome={'Nome 3'}
              imagem={'./logo.png'}
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Teste props 4, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit facilisis dolor ac blandit. Aenean libero sem, venenatis at dolor sed,suscipit accumsan libero. Nullam odio tortor, euismod finibus velit.'
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
