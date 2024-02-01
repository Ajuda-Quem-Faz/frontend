import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token Expirou!', "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', "")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarTema() {

        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: { 'Authorization': token }
            })
            ToastAlerta('O Tema foi excluído com sucesso!', "sucesso")
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O Token Expirou!', "erro")
                handleLogout();
            } else {
                ToastAlerta('Erro ao excluir o tema.',  "erro")
            }

        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-primary-orange text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.setor}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-600 hover:bg-red-800 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-primary-orangeLight
                                   hover:bg-primary-orange flex items-center justify-center'
                                   onClick={deletarTema}>
                         {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Sim</span>
                        
                    }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria