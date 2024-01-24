import { FacebookLogo } from "@phosphor-icons/react"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"

function Cadastro() {
        
    // const navigate = useNavigate()
    
    // const [isLoading, setIsLoading] = useState<boolean>(false)
  
    // const[confirmaSenha, setConfirmaSenha] = useState<string>("")
  
    // const [usuario, setUsuario] = useState<usuario>({
    //   id: 0,
    //   nome: '',
    //   usuario: '',
    //   senha: '',
    //   foto: ''
    // })
    
    // useEffect(() => {
    //   if (usuario.id !== 0){
    //     retornar()
    //   }
    // }, [usuario])
  
    // function retornar(){
    //   navigate('/login')
    // }
  
    // function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    //   setUsuario({
    //     ...usuario,
    //     [e.target.name]: e.target.value
    //   })
    //   console.log(usuario)
    // }
  
    // function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    //   setConfirmaSenha(e.target.value)
    //   console.log(confirmaSenha)
    // }
  
    // async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    //   e.preventDefault()
  
    //   if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
  
    //     setIsLoading(true)
  
    //     try{
    //       await cadastrarNovoUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
    //       alert('Usuário cadastrado com sucesso!')
    //     }catch(error){
    //       alert('Erro ao cadastrar o usuário!')
    //     }
    //   }else{
    //     alert('Dados estão inconsistentes. Verifique as informações do cadastro')
    //     setUsuario({...usuario, senha: ''})
    //     setConfirmaSenha('')
    //   }
  
    //   setIsLoading(false)
    // }
  
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="py-2 flex flex-col gap-1 justify-center text-center text-slate-800 font-semibold text-2xl mx-28 w-1/4">
                    <h1>Cadastro</h1>
                    <h2>Ajuda Quem Faz</h2>
                </div>
                
                <div className="flex justify-center rounded-xl  bg-orange-100 mb-20 p-12 shadow-xl">

                    <form action="" className="flex flex-col justify-center gap-2">
                        
                        <label className="text-lg">Nome Completo</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">CPF/CNPJ</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">Email</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">Confirmar senha</label>
                        <input className="border-2 rounded-lg text-base font-normal text-gray-800 px-2 py-1 bg-gray-100" placeholder="**" type="confirmarSenha" />
                        <label className="text-lg">Senha</label>
                        <input className="border-2 rounded-lg text-base font-normal text-gray-800 px-2 py-1 bg-gray-100" placeholder="**" type="password" />
                        <button className="border-2 border-solid rounded-lg bg-orange-500 hover:bg-orange-600 border-orange-600 hover:border-orange-700 text-orange-100
                         p-1 mt-4 text-xl">Cadastrar</button>

                        
                        
                    </form>
                </div>
            </div>
        )
    }
    
  export default Cadastro;