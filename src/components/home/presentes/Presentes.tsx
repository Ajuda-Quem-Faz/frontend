import { Link } from 'react-router-dom';
import CardPresente from './CardPresente';

function Presentes() {
  return (
    <>
      <div className="md:text-2xl flex justify-between">
        <h2 className="font-bold text-secondary-purple">Presentes Criativos</h2>
        <Link
          to="/categorias"
          className=" text-primary-orange hover:underline text-nowrap"
        >
          Ver todas as categorias
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-4 md:gap-8 grid-cols-2 items-center">
        <CardPresente
          nome="Bolsas"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_08591-2ebb1facfd36e7378f16832333862733-640-0.webp"
        />
        <CardPresente
          nome="Tricotados"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/image000791-8be3081e2a7c1a0bc916859971438304-640-0.webp"
        />
        <CardPresente
          nome="Vasos"
          imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
        />
        <CardPresente
          nome="Chaveiros"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_10791-90bd99d863013cbcfa16832442070801-640-0.webp"
        />
        <CardPresente
          nome="Bolsas"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_08591-2ebb1facfd36e7378f16832333862733-640-0.webp"
        />
        <CardPresente
          nome="Tricotados"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/image000791-8be3081e2a7c1a0bc916859971438304-640-0.webp"
        />
        <CardPresente
          nome="Vasos"
          imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
        />
        <CardPresente
          nome="Chaveiros"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_10791-90bd99d863013cbcfa16832442070801-640-0.webp"
        />
      </div>
    </>
  );
}

export default Presentes;
