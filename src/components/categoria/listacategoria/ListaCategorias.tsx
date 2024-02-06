import { useEffect, useState, useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardcategoria/CardCategoria';
import { ToastAlerta } from '../../../utils/ToastAlerta';

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categoria.map((categoria) => (
              <>
                <CardCategoria categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
