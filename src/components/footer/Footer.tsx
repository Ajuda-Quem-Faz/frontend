import {
  CurrencyCircleDollar,
  Medal,
  Storefront,
  YoutubeLogo,
} from '@phosphor-icons/react';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col text-center">
      <div className="flex justify-around items-center py-2 text-secondary-purpleDark font-semibold">
        <Link
          to={'/about'}
          className="flex flex-col items-center hover:text-secondary-purpleLight"
        >
          <Medal size={36}></Medal>
          <p className="">Quem somos</p>
        </Link>
        <Link
          to={''}
          className="flex flex-col items-center hover:text-secondary-purpleLight"
        >
          <CurrencyCircleDollar size={36}></CurrencyCircleDollar>
          <p className="">Como contribuir</p>
        </Link>
        <Link
          to={''}
          className="flex flex-col items-center hover:text-secondary-purpleLight"
        >
          <Storefront size={36}></Storefront>
          <p className="">Como Vender</p>
        </Link>
      </div>
      <div className="flex px-2 w-full justify-around items-center bg-secondary-purpleDark">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/ajudaquemfaz/Logo/Footer%20logo%20ImgKit.png?updatedAt=1706791149016"
            className="py-2 w-14"
            alt="logo"
          ></img>
        </Link>
        <div id="icon" className="flex w-full justify-around">
          <Link to="#">
            <InstagramLogo
              size={40}
              className="text-tertiary-blue hover:text-primary-orange"
            ></InstagramLogo>
          </Link>
          <Link to="#">
            <FacebookLogo
              size={40}
              className="text-tertiary-blue hover:text-primary-orangeLight"
            ></FacebookLogo>
          </Link>
          <Link to="#">
            <YoutubeLogo
              size={40}
              className="text-tertiary-blue hover:text-primary-orangeLight"
            ></YoutubeLogo>
          </Link>
          <Link to="#">
            <LinkedinLogo
              size={40}
              className="text-tertiary-blue hover:text-primary-orangeLight"
            ></LinkedinLogo>
          </Link>
        </div>
      </div>
      <div className="flex justify-between px-1 font-bold text-xs py-1">
        <p>©2024 AjudaQuemFaz </p>
        <p>Termos de uso</p>
        <p>Politica de Privacidade</p>
      </div>
    </footer>
  );
}

export default Footer;
