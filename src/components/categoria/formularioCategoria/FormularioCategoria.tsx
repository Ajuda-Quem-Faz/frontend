import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";


function FormularioCategoria() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    try{
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')){
        ToastAlerta('O token Expirou!', 'info')
        handleLogout()
      }
    }

  }

  useEffect(() => {
    if (id !== undefined) {

        buscarPorId(id)
    }
}, [id])


  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate('/login')
    }
  }, [token])


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function atualizarEstadoArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { 'Authorization': token }
        })
        ToastAlerta('A Categoria foi atualizada com sucesso!', 'sucesso')
      } catch (error: any) {
        if (error.toString().includes('403')) {
          ToastAlerta('O Token Expirou!', 'info')
          handleLogout();
        } else {
          ToastAlerta('Erro ao atualizar a Categoria.', 'erro')
        }

      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { 'Authorization': token }
        })
        ToastAlerta('A Categoria foi cadastrada com sucesso!', 'sucesso')
      } catch (error: any) {
        if (error.toString().includes('403')) {
          ToastAlerta('O Token Expirou!', 'info')
          handleLogout();
        } else {
          ToastAlerta('Erro ao cadastrar a Categoria.', 'erro')
        }

      }
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center text-dark-black font-semibold py-9 w-2/4 sm:w-2/4 lg:2/4">
        <form
          action=""
          className="flex flex-col justify-center gap-2 w-full lg:w-2/3"
          onSubmit={gerarNovaCategoria}
        >
          <div className="flex justify-center text-xl items-center gap-3">
            <img src="../logo.png" alt="" className="h-12" />
            <h2 className="font-bold text-center">Ajuda Quem Faz</h2>
          </div>
          <hr />
          <h1 className="py-2 flex justify-center text-xl">{id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}</h1>
          <label className="text-lg">Setor</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="Defina o setor"
            type="text"
            name='setor'
            id="setor"
            value={categoria.setor}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma Categoria válida!')}
            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
          />
          <label className="text-lg">Descrição do serviço</label>
          <textarea
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="Descreva aqui o tipo de serviço"
            rows={10}
            name='tipoServico'
            id="tipoServico"
            value={categoria.tipoServico}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoArea(e)}
            required
            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma Categoria válida!')}
            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
          />
          <button
            className="text-xl mt-4 rounded-lg bg-secondary-purpleLight text-white py-2 hover:text-primary-orangeDark hover:bg-secondary-purple flex justify-center"
            type="submit"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="orange"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioCategoria;
