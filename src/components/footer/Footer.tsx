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
          className="flex flex-col items-center hover:text-primary-orange transition delay-75"
        >
          <Medal size={36}></Medal>
          <p className="">Quem Somos</p>
        </Link>
        <Link
          to={''}
          className="flex flex-col items-center hover:text-primary-orange transition delay-75"
        >
          <CurrencyCircleDollar size={36}></CurrencyCircleDollar>
          <p className="">Como Contribuir</p>
        </Link>
        <Link
          to={''}
          className="flex flex-col items-center hover:text-primary-orange transition delay-75"
        >
          <Storefront size={36}></Storefront>
          <p className="">Como Vender</p>
        </Link>
      </div>
      <div className="flex px-2 w-full justify-around items-center bg-secondary-purpleDark">

        <img
          src="https://ik.imagekit.io/ajudaquemfaz/Logo/Footer%20logo%20ImgKit.png?updatedAt=1706791149016"
          className="py-2 w-14"
          alt="logo">

        </img>

        <div
          id="icon"
          className="flex w-full justify-end gap-8 md:mr-8 text-tertiary-blueLight"
        >
          <Link to="#">
            <InstagramLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></InstagramLogo>
          </Link>
          <Link to="#">
            <FacebookLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></FacebookLogo>
          </Link>
          <Link to="#">
            <YoutubeLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></YoutubeLogo>
          </Link>
          <Link to="#">
            <LinkedinLogo
              size={40}
              className=" hover:text-primary-orange transition delay-75"
            ></LinkedinLogo>
          </Link>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="flex justify-between px-1 font-bold text-xs py-1"
      >
        <p>©2024 AjudaQuemFaz </p>
        <p>Termos de uso</p>
        <p>Politica de Privacidade</p>
      </div>
    </footer>
  );
}

export default Footer;
