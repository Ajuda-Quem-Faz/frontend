import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center text-slate-800 font-semibold text-2xl mx-28 py-9 w-1/4">

                <form action="" className="flex flex-col justify-center gap-2 w-2/3">
                    <h1 className="py-2 flex justify-center">Login</h1>
                    <label className="text-lg">Usuário</label>
                    <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1" placeholder="exemplo@email.com" type="email" />
                    <label className="text-lg">Senha</label>
                    <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1" placeholder="********" type="password" />
                    <button className="border-2 border-solid rounded-lg border-slate-900 hover:border-purple-600 hover:text-purple-600
                     p-1 mt-4 text-xl">Logar</button>
                    <p className="text-lg font-normal flex justify-center gap-1">Não tem uma conta? <Link to={`/`} className="text-purple-600  hover:font-semibold">Cadastre-se aqui!</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login