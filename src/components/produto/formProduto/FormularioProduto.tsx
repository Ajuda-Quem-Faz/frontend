import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormularioProduto() {

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token;

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        setor: '',
        tipoServico: ''
    })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    foto: '',
    categoria: null,
    usuario: null,
    } );

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
          headers: {
            Authorization: token,
          },
        });
      }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
      }
    
      async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
          headers: {
            Authorization: token,
          },
        });
      }

    useEffect(() => {
        if (token === '') {
          ToastAlerta('Você precisa estar logado', 'info');
          navigate('/');
        }
      }, [token]);

    useEffect(() => {
        if (id !== undefined) {

            buscarProdutoPorId(id)
            console.log(categoria)
        }
    }, [id])

      
  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarCategoriaPorId(id);
      console.log(categoria);

    }
  }, [id]);



    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        })
    }

    function retornar() {
        navigate("/produtos")
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos/atualizar`, produto, setProduto, {
                    headers: { Authorization: token }
                })
                ToastAlerta('O Produto foi atualizada com sucesso!', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O Token Expirou!', 'info')
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar o Produto.', 'erro')
                }

            }
        } else {
            try {
                await cadastrar(`/produtos/cadastrar`, produto, setProduto, {
                    headers: { Authorization: token }
                })
                ToastAlerta('O Produto foi cadastrada com sucesso!', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O Token Expirou!', 'info')
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar o Produto.', 'erro')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }



    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center text-dark-black font-semibold py-9">
                <form
                    className="flex flex-col justify-center gap-2 w-2/3"
                    onSubmit={gerarNovoProduto}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome">Nome do Produto</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            className="border-2 border- rounded p-2"
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            minLength={5}
                            maxLength={100}
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O nome do produto é obrigatório! Por favor, preencher.')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            placeholder="Descricao"
                            name="descricao"
                            className="border-2 border- rounded p-2"
                            value={produto.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            minLength={0}
                            maxLength={500}
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('A descrição não pode ultrapassar dos 500 caracteres.')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="text"
                            placeholder="Preco"
                            name="preco"
                            className="border-2 border- rounded p-2"
                            value={produto.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O preço é obrigatório e deve ser maior que R$0,50.')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="foto"
                            placeholder="Foto"
                            name="foto"
                            className="border-2 border- rounded p-2"
                            value={produto.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
          <p>Tema da postagem</p>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um tema</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.setor}</option>
              </>
            ))}
          </select>
        </div>
                    <button
                        type='submit'
                        className='rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 
                            mx-auto py-2 flex justify-center'
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                        }
                    </button>
                    
                </form>
            </div>
        </div>
    );
}

export default FormularioProduto;