import { useState, useContext, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarProduto() {

    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
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
        navigate("/produtos")
    }

    async function deletarProduto() {

        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Produto excluído com sucesso', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar a produto', 'erro')
        }

        retornar()
    }


    return (
        <div className='container lg:w-1/3 mx-auto px-4'>
            <h1 className='text-3xl text-center my-4'>Excluir produto</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className=" items-center">
                <div className="flex justify-center">
                    <img
                        src={produto.foto}
                        alt={`Imagem do ${produto.nome}`}
                        className="flex flex-col items-center justify-end object-cover h-60 w-60 rounded-[3rem] hover:opacity-90 "
                    />
                </div>
                <div className="flex flex-col mt-5 items-center justify-center gap-1">
                    <header
                        className='py-2 px-6 text-black font-semibold text-2xl'>
                        {produto.nome}
                    </header>
                    <p className="font-semibold">Categoria: {produto.categoria?.setor}</p>
                    <p className='py-4 text-lg h-full'>{produto.descricao}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <button
                    className='bg-red-600 hover:bg-red-800 w-full py-2 text-white bg-secondary-purpleLight rounded-lg hover:bg-secondary-purple'
                    onClick={retornar}>
                    Não
                </button>
                <button
                    className='w-full bg-primary-orange text-white
                                   hover:bg-red flex items-center justify-center rounded-lg'
                    onClick={deletarProduto}>
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
    )

}

export default DeletarProduto