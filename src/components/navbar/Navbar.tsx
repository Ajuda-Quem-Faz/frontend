import {
  Funnel,
  MagnifyingGlass,
  ShoppingCartSimple,
  UserCircle,
} from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

const NavBar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  function logout() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'sucesso');
    navigate('/login');
  }

  return (
    <div>
      <div className="flex w-full justify-between py-2">
        <div className="flex items-center justify-center md:w-1/5 w-1/2 logo-container">
          <Link to="/home" className="flex flex-row items-center">
            {
              <img
                src="https://ik.imagekit.io/ajudaquemfaz/Logo/Logo%20ImgKit.png?updatedAt=1706791149163"
                alt="Logo do website"
                className="w-auto md:h-12 h-6 mr-2"
              />
            }
            <h1 className="md:text-lg text-xs font-bold w-1/2">Ajuda Quem Faz</h1>
          </Link>
        </div>
        <div className="input-group md:flex hidden justify-stretch w-full border-primary-orangeLight h-12">
          <button className="flex items-center justify-center w-1/12 gap-3 text-sm font-bold bg-secondary-purpleLight hover:bg-secondary-purpleDark rounded-l-xl">
            <Funnel size={30} color="white" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-light-grayDark px-8 w-full text-lg"
          />
          <button className="grid place-content-center bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 rounded-r-xl w-28">
            <MagnifyingGlass weight="bold" size={26} color="white" />
          </button>
        </div>
        <div id="header-end" className="flex items-center md:w-1/6 w-1/2 justify-evenly ">
          {token !== '' ? (
            <>
              <Link to='/' className="flex flex-col items-center justify-center">
                <ShoppingCartSimple
                  className="text-secondary-purpleLight text-opacity-95"
                  size={44}
                  weight="duotone"
                />
              </Link>
              <div className="group size-11">
                {usuario.foto != '' ? (
                  <img
                    src={usuario.foto}
                    alt=""
                    className="object-cover border-2 border-secondary-purpleLight rounded-full bg-secondary-purpleLight bg-opacity-30"
                  />
                ) : (
                  <UserCircle
                    className="text-secondary-purpleLight"
                    size={48}
                    weight="duotone"
                  />
                )}
                <ul className="absolute z-50 hidden text-secondary-purpleDark pt-1 group-hover:block w-56 right-5 bg-light-gray">
                  <li className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                    <Link to="/cadastroCategoria">Cadastrar Categoria</Link>
                  </li>
                  <li className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                    Settings
                  </li>
                  <li className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                    <a href="/login"> Login</a>
                  </li>
                  <li
                    className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <a className="text-center text-nowrap md:text-base text-xs" href="/login">
              Login ou cadastro
            </a>
          )}
        </div>
      </div>

      {/** Barra Menu */}
      <div className="flex justify-between items-center bg-primary-orange font-semibold text-secondary-purple">
        {/** Categorias */}
        <div className="uppercase items-center place-items-start">
          <NavLinks />
        </div>

        {/** Botões */}
        <div className="flex-row justify-end">
          <button className="uppercase hover:text-white px-10 py-3 transition delay-75">
            <Link to="/" className="">
              Produtos
            </Link>
          </button>

          <button className="uppercase hover:text-white px-10 py-3 transition delay-75">
            <Link to="/about" className="">
              Equipe
            </Link>
          </button>

          <button className="uppercase hover:text-white px-10 py-3 transition delay-75">
            <Link to="/contact" className="">
              Contato
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
