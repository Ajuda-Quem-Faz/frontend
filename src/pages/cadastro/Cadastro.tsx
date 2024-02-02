import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

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
    <div className="mx-auto container grid place-content-center py-4 gap-2">
      <div className="flex justify-center text-xl items-center gap-3">
        <img src="./logo.png" alt="" className="h-12" />
        <h2 className="font-bold text-center">Ajuda Quem Faz</h2>
      </div>
      <hr />
      <h2 className="font-bold text-center text-2xl">Cadastro</h2>

      <div className="flex justify-center rounded-xl bg-primary-orangeLight md:p-12 p-6 ">
        <form
          action=""
          className="flex flex-col justify-center gap-2"
          onSubmit={cadastrarNovoUsuario}
        >
          <label className="text-lg">Nome Completo</label>
          <input
            className="border-2 rounded-xl text-base font-normal text-dark-black px-5 py-2 bg-gray-"
            placeholder="Nome"
            type="text"
            name="nome"
            id="nome"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label className="text-lg">Email</label>
          <input
            className="border-2 rounded-xl text-base font-normal text-dark-black px-5 py-2 bg-light-grayLight"
            placeholder="exemplo@email.com"
            type="email"
            name="usuario"
            id="usuario"
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label className="text-lg">Foto</label>
          <input
            className="border-2 rounded-xl text-base font-normal text-dark-blackLight px-5 py-2 bg-light-grayLight"
            placeholder="Url da foto"
            type="text"
            name="foto"
            id="foto"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label className="text-lg">Senha</label>
          <input
            className="border-2 rounded-xl text-base font-normal text-dark-blackLight  px-5 py-2 bg-light-grayLight"
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
            className="border-2 rounded-xl text-base font-normal text-dark-blackLight  px-5 py-2 bg-light-grayLight"
            placeholder="********"
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
          />

          <button className="flex justify-center border-2 border-solid rounded-xl bg-primary-orange hover:bg-primary-orangeDark border-primary-orange hover:border-primary-orangeDark text-light-grayLight p-1 mt-4 text-xl">
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
