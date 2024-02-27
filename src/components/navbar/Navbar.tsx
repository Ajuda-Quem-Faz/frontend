import { ShoppingCartSimple, UserCircle } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';
import Search from './Search';
import SearchBar from '../searchBar/SearchBar';

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
      <div className="flex gap-4 px-4 items-center w-full justify-between min-h-12">
        <div className="flex items-center logo-container">
          <Link to="/home" className="flex flex-row items-center">
            {
              <img
                src="./logo.png"
                alt="Logo do website"
                className="w-auto md:h-12 h-6 mr-2"
              />
            }
            <h1 className="md:text-lg text-xs font-bold md:leading-[1] py-1 md:block hidden">
              Ajuda Quem Faz
            </h1>
          </Link>
        </div>
        <div className="w-9/12 hidden md:block left-0">
          <SearchBar />
        </div>
        <div id="header-end">
          <div className="flex md:gap-4 gap-1 pl-2 items-center">
            {token !== '' ? (
              <>
                {/** Cart Icon */}
                <Link to="/cart">
                  <ShoppingCartSimple
                    className="text-secondary-purpleLight text-opacity-95 hover:text-primary-orangeLight transition delay-75 text-3xl md:size-10"
                    weight="duotone"
                  />
                </Link>

                {/** User Button */}
                <div className="group md:size-11 size-7">
                  {/** Foto do usuario */}

                  {usuario.foto != '' ? (
                    <img
                      src={usuario.foto}
                      alt=""
                      className="object-cover md:border-2 border border-secondary-purpleLight rounded-full bg-secondary-purpleLight bg-opacity-30 md:size-11 size-7 hover:border-primary-orangeLight"
                    />
                  ) : (
                    <UserCircle
                      className="text-secondary-purpleLight md:size-11 size-7"
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
                        <Link to="/perfil" className="block">
                          Perfil
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
                <Link
                  className="text-center text-nowrap md:text-base text-xs"
                  to={'/login'}
                >
                  Login
                </Link>
                <div className="h-7 w-0.5 bg-light-grayDark mx-2" />
                <Link
                  className="text-center text-nowrap md:text-base text-xs"
                  to={'/cadastro'}
                >
                  Cadastro
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/** Barra Menu */}
      <div className="flex justify-between flex-wrap-reverse bg-primary-orange font-semibold text-secondary-purple px-2">
        {/** Categorias */}
        <div className="uppercase items-center flex text-lg md:z-[60] z-10">
          <NavLinks />
        </div>

        {/** Botões */}
        <div className="absolute w-full left-0 top-12 flex justify-center gap-4 items-start md:pt-2 pt-3">
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
        <div className="z-50">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
