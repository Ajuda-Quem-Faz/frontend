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
              <div>
                <div className="absolute left-0 top-[100px] hidden group-hover:md:block hover:md:block">
                  <div>
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-primary-orange rotate-45"
                    ></div>
                  </div>
                  <div className="bg-primary-orange p-10 grid grid-cols-3 gap-10 list-none rounded-ee-3xl ">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold text-secondary-purpleLight">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm my-2.5 ml-2 text-light-grayLight hover:text-light-grayDark"
                            key={slink.name}
                          >
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
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
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex gap-2 items-center"
                  >
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? <CaretUp /> : <CaretDown />}
                    </span>
                    {slinks.Head}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                    } list-none text-light-grayLight`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
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
