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
          link="artesanato"
          nome="Artesanato"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_24941-383399b60156157bd216859903314766-640-0.webp"
        />
        <CardPresente
          link="decoracao"
          nome="Decoração"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_69751-cfa9370a37542a249e16832467105709-640-0.webp"
        />
        <CardPresente
          link="acessorios"
          nome="Acessórios"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_08431-19805c1615d8db706216832327200720-640-0.webp"
        />
        <CardPresente
          link="chaveiros"
          nome="Chaveiros"
          imagem="https://dcdn.mitiendanube.com/stores/001/933/783/products/img_10791-90bd99d863013cbcfa16832442070801-640-0.webp"
        />
      </div>
    </>
  );
}

export default Presentes;
