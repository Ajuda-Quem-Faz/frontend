import { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './MyLinks';
import { CaretDown, CaretUp, List } from '@phosphor-icons/react';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="group flex items-center w-full justify-between">
            <h1
              className="py-2 flex items-center md:pr-0 group gap-2 hover:text-light-grayLight"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              <List weight="bold" className="text-2xl" />
              <span className="md:block hidden">{link.name}</span>
            </h1>
            {link.submenu && (
              <div key={'string'}>
                <div className="absolute left-0 top-[100px] hidden group-hover:md:block hover:md:block">
                  <div>
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-primary-orange rotate-45"
                    ></div>
                  </div>
                  <div className="bg-primary-orange p-10 grid gap-10 list-none rounded-ee-3xl">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold text-secondary-purpleLight">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="grid text-sm my-2.5 text-light-grayLight hover:text-light-grayDark"
                            key={slink.name}
                          >
                            <Link
                              className="h-full w-full"
                              key={slink.name}
                              to={`/categorias/${slink.name}`}
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                        <hr className="my-6" />
                        <li className="grid text-sm my-5 text-light-grayLight hover:text-light-grayDark">
                          <Link className="h-full w-full" to={`/categorias/`}>
                            Todas as categorias
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div className="grid min-w-72 ml-8">
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="font-semibold md:pr-0 pr-5 flex gap-2 items-center mb-4"
                  >
                    <span className="text-xl">
                      {subHeading === slinks.Head ? <CaretUp /> : <CaretDown />}
                    </span>
                    {slinks.Head}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                    } list-none text-light-grayLight grid grid-cols-2 gap-x-16`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li>
                        <li
                          className="grid text-sm my-2.5 text-light-grayLight hover:text-light-grayDark"
                          key={slink.name}
                        >
                          <Link
                            className="h-full w-full"
                            key={slink.name}
                            to={`/categorias/${slink.name}`}
                          >
                            {slink.name}
                          </Link>
                        </li>
                      </li>
                    ))}
                  </div>
                  <div className="bottom">
                    <hr className="mt-2" />
                    <li className="grid text-sm my-5 text-light-grayLight hover:text-light-grayDark">
                      <Link className="h-full" to={`/categorias/`}>
                        Todas as categorias
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
