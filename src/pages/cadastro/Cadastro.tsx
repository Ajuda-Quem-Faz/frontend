import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';
import { Link } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    sobre: '',
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(usuario);
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error) {
        ToastAlerta('Erro ao cadastrar usuário.', 'erro');
      }
    } else {
      ToastAlerta(
        'Dados estão incosistentes. Verifique as informações do cadastro',
        'erro'
      );
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
    setIsLoading(false);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center text-dark-black font-semibold py-9 md:w-1/4">
        <form
          action=""
          className="flex flex-col justify-center gap-2 md:w-2/3"
          onSubmit={cadastrarNovoUsuario}
        >
          <div className="flex justify-center text-xl items-center gap-3">
            <img src="./logo.png" alt="" className="h-12" />
            <h2 className="font-bold text-center">Ajuda Quem Faz</h2>
          </div>
          <hr />
          <h1 className="py-2 flex justify-center text-2xl">Cadastro</h1>
          <label className="text-lg">Nome Completo</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="Nome"
            type="text"
            name="nome"
            id="nome"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label className="text-lg">Email</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="exemplo@email.com"
            type="email"
            name="usuario"
            id="usuario"
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label className="text-lg">Foto</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="Url da foto"
            type="text"
            name="foto"
            id="foto"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label className="text-lg">Senha</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="********"
            type="password"
            name="senha"
            id="senha"
            pattern=".{8,}"
            required 
            title="Insira um minimo de 8 caracteres"
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label className="text-lg">Confirmar senha</label>
          <input
            className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
            placeholder="********"
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
          />
          <button
            className="border-2 border-solid rounded-lg border-dark-black hover:border-secondary-purple hover:text-secondary-purple
                 p-1 mt-4 text-lg flex justify-center"
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
              <span>Cadastrar</span>
            )}
          </button>
          <p className="text-center text-base border-t-2 py-3 mt-3 font-semibold">
            Já tem uma conta?{' '}
            <Link
              to={`/login`}
              className="text-secondary-purpleLight  hover:underline"
            >
              Entre aqui!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
