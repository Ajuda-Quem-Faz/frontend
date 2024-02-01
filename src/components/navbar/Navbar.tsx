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
      <div className="flex w-full justify-between py-4 ">
        <div className="flex items-center justify-center w-1/5 logo-container">
          <Link to="/home" className="flex flex-row items-center ">
            {
              <img
                src="https://ik.imagekit.io/ajudaquemfaz/Logo/Logo%20ImgKit.png?updatedAt=1706791149163"
                alt="Logo do website"
                className="w-auto h-16"
              />
            }
            <h1 className="text-xl font-bold">Ajuda Quem Faz</h1>
          </Link>
        </div>
        <div className="input-group flex justify-stretch w-full border-primary-orangeLight border-2 border-none rounded-3xl">
          <button className="flex items-center justify-center w-1/12 gap-3 text-sm font-bold bg-secondary-purpleLight hover:bg-secondary-purpleDark rounded-s-3xl">
            <Funnel size={36} color="white" weight="bold" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-light-grayDark px-10 w-full text-xl"
          />
          <button className="grid place-content-center bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 rounded-e-3xl w-[12.5%] ">
            <MagnifyingGlass weight="bold" size={32} color="white" />
          </button>
        </div>
        <div id="header-end" className="flex items-center w-1/6 justify-evenly ">
          <a href="/" className="flex flex-col items-center justify-center">
            <ShoppingCartSimple
              className="text-secondary-purpleLight text-opacity-95"
              size={58}
              weight="duotone"
            />
          </a>
          <div className="group z-50">
            {token !== '' ? (
              <img
                src={
                  usuario.foto != ``
                    ? `${usuario.foto}`
                    : 'https://img.myloview.com.br/fotomurais/human-icon-user-symbol-profile-sign-vector-illustration-700-216582565.jpg'
                }
                alt="Foto do usuário"
                className="h-14 object-cover border-4 border-secondary-purpleLight rounded-full bg-secondary-purpleLight bg-opacity-30"
              />
            ) : (
              <UserCircle
                className="text-secondary-purpleLight"
                size={64}
                weight="duotone"
              />
            )}
            <ul className="absolute hidden text-secondary-purpleDark pt-1 group-hover:block w-56 right-5 bg-light-gray">
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
        </div>
      </div>
      <div>
        <div className="flex justify-around p-0 bg-primary-orange text-light-grayLight gap-60 h-20 text-lg">
          <div className="md:flex hidden uppercase items-center pr-96 text-secondary-purple z-50">
            <NavLinks />
          </div>
          <div className="flex justify-center">
            <ul className="md:flex hidden uppercase items-center font-semibold text-light-grayLight">
              <li className="flex flex-row gap-20 pr-14 ">
                <Link to="/">Produtos</Link>
                <Link to="/about">Equipe</Link>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
