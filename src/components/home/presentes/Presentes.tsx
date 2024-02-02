import CardPresente from './CardPresente';

function Presentes() {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-8 grid-cols-2 items-center py-2">
      <CardPresente
        nome="Personalizados"
        imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
      />
      <CardPresente
        nome="Personalizados"
        imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
      />
      <CardPresente
        nome="Personalizados"
        imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
      />
      <CardPresente
        nome="Personalizados"
        imagem="https://www.wabisabiatelie.com/cdn/shop/products/wabisabiatelie_vasobarro_artesanal_P_arranjoseco6_1200x1805.jpg"
      />
    </div>
  );
}

export default Presentes;
