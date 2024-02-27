import { CaretRight, MagnifyingGlass } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../models/Produto';
import Categoria from '../../models/Categoria';

function SearchBar() {
  const [input, setInput] = useState('');

  const [value, setValue] = useState('Produtos');

  const [usproduto, setProduto] = useState<Produto[]>([]);

  const [uscategoria, setCategoria] = useState<Categoria[]>([]);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const navigate = useNavigate();

  async function buscarPorParam(pesquisa: string) {
    if (value === 'Produtos')
      await buscar(`/produtos/nome/${pesquisa}`, setProduto, {
        headers: { Authorization: token },
      });

    if (value === 'Categorias')
      await buscar(`/categorias/setor/${pesquisa}`, setCategoria, {
        headers: { Authorization: token },
      });
  }

  const fetchData = (value: string) => {
    buscarPorParam(value);
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (value.length > 0) {
      fetchData(value);
      setshow(true);
    } else setshow(false);
  };

  var [show, setshow] = useState(false);

  function Pesquisa() {
    navigate('/produtos/' + input);
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function Esconder() {
    // necessário para permitir o clique nas opções
    await delay(100);
    setshow(false);
    setInput('');
    setProduto([]);
    setCategoria([]);
  }

  useEffect(() => {}), [];

  return (
    <>
      <div className="input-group w-full flex min-h-12 md:min-h-0 relative">
        <select
          name="pesquisa"
          id="pesquisa"
          className="bg-secondary-purpleLight text-light-grayLight md:rounded-s-2xl text-xs p-2.5 appearance-none text-center"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          <option value="Produtos">Produtos</option>
          <option value="Categorias">Categorias</option>
        </select>
        <input
          type="text"
          name="pesquisa"
          placeholder="Pesquise seu produto aqui"
          className="bg-neutral-100 md:pl-5 pl-3 text-sm md:text-lg w-full rounded-none"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'Enter') Pesquisa();
          }}
          onFocus={() => setshow(true)}
          onBlur={() => Esconder()} // necessário para permitir o clique nas opções
        />
        <button
          onClick={() => {
            Pesquisa();
          }}
          className="md:py-2 md:px-4 bg-secondary-purpleLight hover:bg-secondary-purpleDark bg-opacity-95 md:rounded-e-2xl md:p-0 px-3 transition delay-75"
        >
          <MagnifyingGlass className="text-3xl p-1" color="white" />
        </button>
        {show ? (
          <ul className="results-list absolute md:top-14 top-12 border-2 bg-light-grayLight z-[120] w-full rounded-2xl flex flex-col font-medium left-0 max-h-64 overflow-y-auto">
            {token !== '' ? (
              value === 'Produtos' ? (
                <h2 className="p-3 bg-gray-200">
                  {usproduto.length} Resultados encontrados
                </h2>
              ) : (
                <h2 className="p-3 bg-gray-200">
                  {uscategoria.length} Resultados encontrados
                </h2>
              )
            ) : (
              <div className="p-3 flex gap-1 items-center">
                <h2 className="">Você precisa estar logado para pesquisar.</h2>
              </div>
            )}
            {value === 'Produtos'
              ? usproduto.map((pesquisa, id) => {
                  return (
                    <div key={id}>
                      <Link
                        to={'/produtos/' + pesquisa.nome}
                        className="grid grid-cols-3 items-center hover:bg-gray-100 py-2 px-4 h-full cursor-pointer"
                      >
                        <p>{pesquisa.nome}</p>
                        <p>{pesquisa.categoria?.setor}</p>
                        <CaretRight className="ml-auto" />
                      </Link>
                      <hr />
                    </div>
                  );
                })
              : uscategoria.map((pesquisa, id) => {
                  return (
                    <div key={id}>
                      <Link
                        to={'/categorias/' + pesquisa.setor}
                        className="flex justify-between items-center hover:bg-gray-100 py-2 px-4 h-full cursor-pointer"
                      >
                        <p>{pesquisa.setor}</p>
                        <p>{}</p>
                        <CaretRight className="ml-auto" />
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
