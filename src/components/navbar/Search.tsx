import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';

function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="hidden py-2">
      <MagnifyingGlass
        className="text-2xl hover:text-light-grayLight"
        weight="bold"
        onClick={() => {
          setSearch(!search);
        }}
      />
      {search ? <SearchBar /> : ''}
    </div>
  );
}

export default Search;
