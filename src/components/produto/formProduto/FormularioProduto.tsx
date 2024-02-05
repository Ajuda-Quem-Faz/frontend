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



   // Este é o código que eu juntei e estilizei
return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center text-dark-black font-semibold py-9 md:w-1/4">
        <form
          action=""
          className="flex flex-col justify-center gap-2 w-2/3"
          onSubmit={gerarNovoProduto}
        >
          <div className="flex justify-center text-xl items-center gap-3">
            <img src="./logo.png" alt="" className="h-12" />
            <h2 className="font-bold text-center">Ajuda Quem Faz</h2>
          </div>
          <hr />
          <h1 className="py-2 flex justify-center text-2xl">
            {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
          </h1>
          <label className="text-lg">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1" // Eu usei a mesma classe que você usou no primeiro código
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
            minLength={5}
            maxLength={100}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "O nome do produto é obrigatório! Por favor, preencher."
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
          <label className="text-lg">Descrição</label>
          <input
            type="text"
            placeholder="Descricao"
            name="descricao"
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1" // Eu usei a mesma classe que você usou no primeiro código
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            minLength={0}
            maxLength={500}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "A descrição não pode ultrapassar dos 500 caracteres."
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
          <label className="text-lg">Preço</label>
          <input
            type="text"
            placeholder="Preco"
            name="preco"
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1" // Eu usei a mesma classe que você usou no primeiro código
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "O preço é obrigatório e deve ser maior que R$0,50."
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
          />
          <label className="text-lg">Foto</label>
          <input
            type="foto"
            placeholder="Foto"
            name="foto"
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1" // Eu usei a mesma classe que você usou no primeiro código
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            style={{
              backgroundImage: `url(${produto.foto || "./default.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <label className="text-lg">Tema da postagem</label>
          <select
            name="categoria"
            id="categoria"
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1" // Eu usei a mesma classe que você usou no primeiro código
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um tema
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.setor}</option>
              </>
            ))}
          </select>
          <button
            className="border-2 border-solid rounded-lg border-dark-black hover:border-secondary-purple hover:text-secondary-purple
                   p-1 mt-4 text-lg flex justify-center" // Eu usei a mesma classe que você usou no primeiro código
            type="submit"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="purple"
                strokeWidth="5"
                animationDuration="0.75"
                width="28"
                visible={true}
              />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
            }
  export default FormularioProduto;
