import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardOng from './CardOng';

const Info = () => (
  <>
    <div className="flex flex-col xl:grid grid-cols-5 xl:gap-16 gap-4 p-8 lg:p-8 py-4 md:m-0 bg-light-grayDark rounded-3xl">
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold text-secondary-purple">Ajuda Quem Faz!</h2>
        <p className="text-xl text-justify">
          Somos um site de e-commerce com produtos produzidos e gerados por projetos
          sociais de todo país
        </p>
      </section>
      <section className="col-span-4">
        <h2 className="text-2xl font-semibold">
          Diversos projetos sendo impulsionados por você! Conheça quem faz:
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
          className="pt-4 pb-10"
        >
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Promovemos a transformação de milhares de vidas por meio de projetos contínuos de educação, geração de renda e acesso à água, moradia e saúde. Estamos rompendo um ciclo secular de miséria no sertão. Com oportunidades, mais de 10 mil crianças e jovens já enxergam um futuro diferente.'
              }
              nome={'Amigos do bem'}
              imagem={
                'https://www.amigosdobem.org/wp-content/uploads/2021/03/Novo-LOGO-01.png'
              }
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Temos como missão atuar a favor da justiça social, promovendo o protagonismo de crianças, adolescentes e jovens nas esferas do brincar, da cultura, da inclusão digital, do meio ambiente e do apoio à educação e às famílias.'
              }
              nome={'O PIPA'}
              imagem={
                'https://opipa.org/wp-content/uploads/2020/10/Logo_pipa_fonte_oficial_2020_i.png'
              }
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <CardOng
              descricao={
                'Temos como missão transformar a pobreza das favelas em peça de museu. Nosso foco são iniciativas transformadoras, capazes de gerar resultados de longo prazo entregando serviços de educação, desenvolvimento econômico e cidadania em favelas, além de executamos programas de transformação sistêmica, como o Favela 3D'
              }
              nome={'Gerando Falcões'}
              imagem={
                'https://cvee2f.p3cdn1.secureserver.net/wp-content/uploads/2022/03/logosite-gerandofalcoes.png'
              }
              localizacao={'São Paulo, SP'}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </>
);

export default Info;
