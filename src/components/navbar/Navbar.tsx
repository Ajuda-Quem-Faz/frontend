import {
  Funnel,
  MagnifyingGlass,
  ShoppingCartSimple,
  UserCircle,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {

  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/login");
  }


  return (
    <div>
      <div className="flex w-[100%] justify-between py-4 ">
        <div className="flex items-center justify-center w-1/5 logo-container">
          <Link to="/home" className="flex flex-row items-center ">
            {
              <img
                src="https://ik.imagekit.io/pxmiddle/logo.png?updatedAt=1706225020575"
                alt="Logo do website"
                className="w-auto h-16"
              />
            }
            <h1 className="text-xl font-bold">Ajuda Quem Faz</h1>
          </Link>
        </div>
        <div className="input-group flex justify-stretch w-[100%] border-primary-300 border-2 border-none rounded-3xl">
          <button className="flex items-center justify-center w-1/12 gap-3 text-sm font-bold bg-secondary-700 rounded-s-3xl">
            <Funnel size={36} color="white" weight="bold" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-neutral-200 px-10 w-[100%] text-xl"
          />
          <button className="grid place-content-center bg-secondary-700 bg-opacity-95 rounded-e-3xl w-[12.5%] ">
            <MagnifyingGlass weight="bold" size={32} color="white" />
          </button>
        </div>
        <div
          id="header-end"
          className="flex items-center w-1/6 h-100 justify-evenly "
        >
          <a href="/" className="flex flex-col items-center justify-center">
            <ShoppingCartSimple
              className="text-secondary-700 text-opacity-95"
              size={58}
              weight="duotone"
            />
          </a>
          <div className="group ">
            <UserCircle
              className="text-secondary-700"
              size={64}
              weight="duotone"
            />
            <ul className="rounded absolute hidden text-secondary-700 pt-1 group-hover:block w-56 right-5">
              <li className="bg-primary-200 hover:bg-primary-400 py-4 px-4 cursor-pointer">
                Cadastrar Categoria
              </li>
              <li className="bg-primary-200 hover:bg-primary-400 py-4 px-4 cursor-pointer">
                Settings
              </li>
              <li className="bg-primary-200 hover:bg-primary-400 py-4 px-4 cursor-pointer">
                <a href="/login"> Login</a>
              </li>
              <li className="bg-primary-200 hover:bg-primary-400 py-4 px-4 cursor-pointer" onClick={logout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around p-0 bg-primary-500 text-secondary-700 gap-60 h-20 border border-blue-200 text-lg">
          <div className="md:flex hidden uppercase items-center pr-96">
            <NavLinks />
          </div>
          <div className="flex justify-center">
            <ul className="md:flex hidden uppercase items-center">
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
