import { Link } from 'react-router-dom';
import { links } from './MyLinks';
import { List } from '@phosphor-icons/react';

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text left md:cursor-pointer group flex flex-row items-center mx-16 hover:underline z-50 gap-3">
            <List size={22} />
            <h1 className="py-3">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-40 left-40 hidden group-hover:block hover:block">
                  <div className="bg-primary-orange p-5 grid grid-cols-2 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slinks) => (
                          <li className="text-sm text-dark-blackLight my-2.5 list-none">
                            <Link
                              to={slinks.link}
                              className=" hover:text-secondary-purpleLight"
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
