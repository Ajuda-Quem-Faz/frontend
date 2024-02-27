import { useEffect, useState, useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardcategoria/CardCategoria';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import CardProduto from '../../home/produtos-carousel/CardProduto';
import Produto from '../../../models/Produto';

function ListaCategorias() {
  useEffect(() => {
    document.title = 'Ajuda quem Faz - Categorias';
  }, []);

  let navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  var token = usuario.token ?? localStorage.getItem('token');

  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token expirou', 'info');
        handleLogout();
      }
    }
  }

  let { param } = useParams();

  async function buscarPorParam() {
    try {
      await buscar(`/categorias/setor/${param}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token Expirou!', 'info');
        handleLogout();
      }
    }
  }

  async function PegarCategorias() {
    param ? buscarPorParam() : buscarCategoria();
  }

  useEffect(() => {
    PegarCategorias();
  }, [token, param]);

  return (
    <>
      {categoria.length === 0 && (
        <div className="flex items-center justify-center w-full h-screen">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#FF9900"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!param ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoria.map((categoria) => (
                <>
                  <CardCategoria categoria={categoria} />
                </>
              ))}
            </div>
          ) : (
            <div className="container mx-auto my-4 gap-1 grid grid-cols-2 min-[460px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 p-1">
              {categoria.map((categoria) => (
                <>
                  <div className="col-span-2 min-[460px]:col-span-3 lg:col-span-4 xl:col-span-5 md:gap-4 px-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-primary-orange text-2xl font-medium">
                        {categoria.setor}
                      </h2>
                      <h2 className="text-dark-blackLight">
                        {categoria.produto.length} resultados
                      </h2>
                    </div>
                    <hr />
                    <h2 className="font-medium mt-3 text-pretty text-justify">{categoria.tipoServico}</h2>
                  </div>
                  {categoria.produto.map((produto) => (
                    <CardProduto
                      id={produto.id}
                      nome={produto.nome}
                      descricao={produto.descricao}
                      preco={produto.preco}
                      foto={produto.foto}
                      usuario={produto.usuario}
                    />
                  ))}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
