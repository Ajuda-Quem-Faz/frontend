import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';

function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="py-2 block md:hidden">
      <MagnifyingGlass
        className="text-2xl hover:text-light-grayLight"
        weight="bold"
        onClick={() => {
          setSearch(!search);
        }}
      />
      {search ? (
        <>
          <div className="absolute top-0 left-0 w-full">
            <SearchBar />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default Search;
