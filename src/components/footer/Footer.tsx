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
          <Medal size={42}></Medal>
          <p className="">Quem Somos</p>
        </Link>
        <Link
          to={'/contribuir'}
          className="flex flex-col items-center hover:text-primary-orange transition delay-75"
        >
          <CurrencyCircleDollar size={42}></CurrencyCircleDollar>
          <p className="">Como Contribuir</p>
        </Link>
        <Link
          to={'/contribuir'}
          className="flex flex-col items-center hover:text-primary-orange transition delay-75"
        >
          <Storefront size={42}></Storefront>
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
          <Link to="/home">
            <InstagramLogo
             
              className=" hover:text-primary-orange text-[2.5rem]"
            ></InstagramLogo>
          </Link>
          <Link to="/home">
            <FacebookLogo
             
              className=" hover:text-primary-orange text-[2.5rem]"
            ></FacebookLogo>
          </Link>
          <Link to="/home">
            <YoutubeLogo
             
              className=" hover:text-primary-orange text-[2.5rem]"
            ></YoutubeLogo>
          </Link>
          <Link to="/about">
            <LinkedinLogo
             
              className=" hover:text-primary-orange text-[2.5rem]"
            ></LinkedinLogo>
          </Link>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="flex justify-between px-1 *:text-sm py-1"
      >
        <p className='text-xs'>©2024 AjudaQuemFaz </p>
        <p className='text-xs'>Termos de uso</p>
        <p className='text-xs'>Politica de Privacidade</p>
      </div>
    </footer>
  );
}

export default Footer;
