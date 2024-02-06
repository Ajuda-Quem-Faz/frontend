import { CaretRight, MagnifyingGlass } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';

function SearchBar() {
  const [input, setInput] = useState('');

  const [uspesquisa, setPesquisa] = useState<any[]>([]);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const navigate = useNavigate();

  async function buscarPorParam(pesquisa: string) {
    await buscar(`/produtos/nome/${pesquisa}`, setPesquisa, {
      headers: { Authorization: token },
    });
  }

  const fetchData = (value: string) => {
    buscarPorParam(value);
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (value.length > 0) fetchData(value);
  };

  var [show, setshow] = useState(false);

  function Pesquisa() {
    console.log('aqui');
    navigate('/produtos/' + input);
  }

  return (
    <>
      <div
        className="input-group col-span-2 w-10/12 flex border-primary-orangeLight relative"
        onFocus={() => setshow(true)}
        onBlur={() => setshow(false)}
      >
        {/* <select
          name="pesquisa"
          id="pesquisa"
          className="bg-secondary-purpleLight text-light-grayLight rounded-s-2xl p-2"
        >
          <option value="Produtos">Produtos</option>
          <option value="Categorias">Categorias</option>
          <option value="Ongs">Ongs</option>
        </select> */}
        <input
          type="text"
          name="pesquisa"
          placeholder="Pesquise seu produto aqui"
          className="bg-light-grayDark md:pl-5 pl-1 text-sm md:text-lg w-full rounded-s-2xl"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'Enter') Pesquisa();
          }}
        />
        <button
          onClick={() => {
            console.log(input);
            Pesquisa();
          }}
          className="md:py-2 md:px-4 bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 rounded-e-2xl transition delay-75"
        >
          <MagnifyingGlass className="text-3xl p-1" color="white" />
        </button>
        {show ? (
          <ul className="results-list absolute top-14 border-2 bg-light-grayLight z-[120] w-full rounded-2xl flex flex-col font-medium left-0 max-h-64 overflow-y-auto">
            {token !== '' ? (
              <h2 className="p-3 bg-gray-200">
                {uspesquisa.length} Resultados encontrados
              </h2>
            ) : (
              <div className="p-3 flex gap-1 items-center">
                <h2 className="">Você precisa estar logado para pesquisar.</h2>
              </div>
            )}
            {uspesquisa.map((pesquisa, id) => {
              return (
                <div key={id}>
                  <Link
                    to={'/produtos/' + pesquisa.nome}
                    className="flex justify-between items-center hover:bg-gray-100 py-2 px-4 h-full cursor-pointer"
                  >
                    <p>{pesquisa.nome}</p>
                    <CaretRight />
                  </Link>
                  <hr />
                </div>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default SearchBar;
