import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router"
import Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        sobre: ''
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuário cadastrado com sucesso!')
            } catch (error) {
                alert('Erro ao cadastrar usuário.')
            }
        } else {
            alert('Dados estão incosistentes. Verifique as informações do cadastro')
            setUsuario({ ...usuario, senha: '' })
            setConfirmaSenha('')
        }
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="py-2 flex flex-col gap-1 justify-center text-center text-dark-blackLight  font-semibold text-2xl mx-28 w-1/4">
                <h1>Cadastro</h1>
                <h2>Ajuda Quem Faz</h2>
            </div>

            <div className="flex justify-center rounded-xl  bg-primary-orange mb-20 p-12 shadow-xl">

                <form action="" className="flex flex-col justify-center gap-2" onSubmit={cadastrarNovoUsuario}>

                    <label className="text-lg">Nome Completo</label>
                    <input className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1 bg-gray-" placeholder="Nome"
                        type="text" name="nome" id="nome"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                    <label className="text-lg">Email</label>
                    <input className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1 bg-light-grayLight"
                        placeholder="exemplo@email.com" type="email" name="usuario" id="usuario"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                    <label className="text-lg">Foto</label>
                    <input className="border-2 rounded-lg text-base font-normal text-dark-blackLight px-2 py-1 bg-light-grayLight"
                        placeholder="Url da foto" type="text" name="foto" id="foto"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                    <label className="text-lg">Senha</label>
                    <input className="border-2 rounded-lg text-base font-normal text-dark-blackLight  px-2 py-1 bg-light-grayLight"
                        placeholder="********" type="password" name="senha" id="senha"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                    <label className="text-lg">Confirmar senha</label>
                    <input className="border-2 rounded-lg text-base font-normal text-dark-blackLight  px-2 py-1 bg-light-grayLight"
                        placeholder="********" type="password" name="confirmarSenha" id="confirmarSenha"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} />
                        
                    <button className="flex justify-center border-2 border-solid rounded-lg bg-primary-orange hover:bg-primary-orangeDark border-primary-orange hover:border-primary-orangeDark text-light-grayLight                         p-1 mt-4 text-xl">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Cadastrar</span>
                        }
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Cadastro;