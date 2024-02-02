import { Funnel, MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="md:hidden py-2">
      <MagnifyingGlass
        className="text-2xl hover:text-light-grayLight"
        weight="bold"
        onClick={() => {
          setSearch(!search);
        }}
      />
      {search ? (
        <div className="input-group flex border-primary-orangeLight absolute mt-1 left-2 right-2 top-0 h-8 transition-all">
          <button className="flex px-2 items-center justify-center gap-3 text-sm font-bold bg-secondary-purpleLight hover:bg-secondary-purpleDark rounded-l-xl">
            <Funnel size={24} color="white" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-light-grayDark px-2 w-full"
          />
          <button className="grid px-3 place-content-center bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 rounded-r-xl">
            <MagnifyingGlass weight="bold" size={20} color="white" />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Search;
