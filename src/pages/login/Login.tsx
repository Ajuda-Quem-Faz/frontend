import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
        ...usuarioLogin,
        [e.target.name]: e.target.value
    });
}

function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
}

useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

return (
    <div className="flex justify-center">
        <div className="flex justify-center text-slate-800 font-semibold text-2xl mx-28 py-9 w-1/4">

            <form action="" className="flex flex-col justify-center gap-2 w-2/3" onSubmit={login}>
                <h1 className="py-2 flex justify-center">Login</h1>
                <label className="text-lg">Usuário</label>
                <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1"
                    placeholder="exemplo@email.com"
                    type="email"
                    id="usuario"
                    name="usuario"
                    value={usuarioLogin.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                    } />
                <label className="text-lg">Senha</label>
                <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1"
                    placeholder="********"
                    type="password"
                    name="senha"
                    id="senha"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                    } />
                <button className="border-2 border-solid rounded-lg border-slate-900 hover:border-purple-600 hover:text-purple-600
                 p-1 mt-4 text-xl flex justify-center" type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                        :
                        <span>Logar</span>
                    }
                </button>
                <p className="text-lg font-normal flex justify-center gap-1">Não tem uma conta? <Link to={`/cadastro`} className="text-purple-600  hover:font-semibold">Cadastre-se aqui!</Link></p>
            </form>
        </div>
    </div>
)
}

export default Login