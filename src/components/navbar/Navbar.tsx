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
import Search from './Search';

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
      <div className="md:grid grid-cols-4 py-2 place-items-center flex justify-between">
        <div className="flex items-center logo-container px-2">
          <Link to="/home" className="flex flex-row items-center">
            {
              <img
                src="./logo.png"
                alt="Logo do website"
                className="w-auto md:h-12 h-6 mr-2"
              />
            }
            <h1 className="md:text-lg text-xs font-bold">Ajuda Quem Faz</h1>
          </Link>
        </div>
        <div className="input-group col-span-2 w-full md:flex hidden border-primary-orangeLight">
          <button className=" py-2 px-4 gap-3 text-sm font-bold bg-secondary-purpleLight hover:bg-secondary-purpleDark rounded-l-xl transition delay-75">
            <Funnel size={30} color="white" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-light-grayDark px-3 text-lg w-full"
          />
          <button className="py-2 px-4 bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 rounded-r-xl transition delay-75">
            <MagnifyingGlass size={30} color="white" />
          </button>
        </div>
        <div id="header-end">
          <div className="flex gap-4">
            {token !== '' ? (
              <>
                {/** Cart Icon */}
                <Link to="/cart">
                  <ShoppingCartSimple
                    className="text-secondary-purpleLight text-opacity-95 hover:text-primary-orangeLight transition delay-75"
                    size={44}
                    weight="duotone"
                  />
                </Link>

                {/** User Button */}
                <div className="group size-11">
                  {/** Foto do usuario */}
                  {usuario.foto != '' ? (
                    <img
                      src={usuario.foto}
                      alt=""
                      className="object-cover border-2 border-secondary-purpleLight rounded-full bg-secondary-purpleLight bg-opacity-30 size-11 hover:border-primary-orangeLight"
                    />
                  ) : (
                    <UserCircle
                      className="text-secondary-purpleLight "
                      size={48}
                      weight="duotone"
                    />
                  )}

                  {/** Menu DropDown */}
                  <div className="absolute hidden text-secondary-purpleDark pt-1 group-hover:block w-56 right-5 bg-light-gray z-[51]">
                    <ul className="items-center flex-row justify-between gap-10">
                      {/** Menu Cadastrar categoria, só aparece quando o usuario é o admin */}
                      {usuario.usuario === 'root@root.com' && (
                        <li className="hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                          <Link to="/cadastroCategoria" className="block">
                            Cadastrar Categoria
                          </Link>
                        </li>
                      )}

                      <li className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                        <Link to="/cadastrarProduto" className="block">
                          Cadastrar Produto
                        </Link>
                      </li>
                      <li className=" hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                        <Link to="/settings" className="block">
                          Configurações
                        </Link>
                      </li>
                      <li className="hover:bg-primary-orangeDark py-4 px-4 cursor-pointer">
                        <Link to="/" className="block" onClick={logout}>
                          Sair
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center">
                <a className="text-center text-nowrap md:text-base text-xs" href="/login">
                  Login
                </a>
                <div className="h-7 w-0.5 bg-light-grayDark mx-2" />
                <a
                  className="text-center text-nowrap md:text-base text-xs"
                  href="/cadastro"
                >
                  Cadastro
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/** Barra Menu */}
      <div className="flex justify-between bg-primary-orange font-semibold text-secondary-purple px-2">
        {/** Categorias */}
        <div className="uppercase items-center flex text-lg z-[60]">
          <NavLinks />
        </div>

        {/** Botões */}
        <div className="justify-end md:flex hidden gap-4">
          <button className="uppercase hover:text-white transition delay-75">
            <Link to="/produtos" className="">
              Produtos
            </Link>
          </button>

          <button className="uppercase hover:text-white transition delay-75">
            <Link to="/about" className="">
              Equipe
            </Link>
          </button>

          <button className="uppercase hover:text-white transition delay-75">
            <Link to="/contact" className="">
              Contato
            </Link>
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
