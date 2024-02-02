import { Link } from 'react-router-dom';
import { links } from './MyLinks';
import { List } from '@phosphor-icons/react';

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <div className="">
          <div className="px-3 left md:cursor-pointer group flex flex-row items-center mx-16 gap-3">
            <List size={22} className="" />
            <h1 className="py-3 text-dark-blackLight hover:text-light-grayLight">
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-16 left-88 hidden group-hover:block hover:block">
                  <div className=" bg-primary-orange   px-10 py-3 mt-2 grid grid-cols-2 gap-8">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold pb-7 text-dark-blackLight">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slinks) => (
                          <li className="text-sm text-white my-2.5 list-none">
                            <Link
                              to={slinks.link}
                              className=" hover:text-dark-blackLight"
                            >
                              {slinks.name}
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
        </div>
      ))}
    </>
  );
}

export default NavLinks;
