import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router';
import { atualizar, buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import Usuario from '../../../models/Usuario';
import { RotatingLines } from 'react-loader-spinner';

function UpdateProfile() {
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const [usuarioAtualizado, setUsuarioAtualizado] = useState<Usuario>(usuario);

  const token = usuario.token;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuarioAtualizado, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token Expirou!', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'info');
      navigate('/login');
    }
  }, [token]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioAtualizado({
      ...usuarioAtualizado,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarEstadoArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setUsuarioAtualizado({
      ...usuarioAtualizado,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function retornar() {
    navigate('/login');
    usuario.token = '';
  }

  async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (confirmaSenha === usuarioAtualizado.senha && usuarioAtualizado.senha.length >= 8) {

      try {
        await atualizar(`/usuarios/atualizar`, usuarioAtualizado, setUsuarioAtualizado, {
          headers: { Authorization: token },
        });
        ToastAlerta(
          'O usuário foi atualizada com sucesso! Por favor, refaça o login!',
          'sucesso'
        );
      } catch (error: any) {
        if (error.toString().includes('403')) {
          ToastAlerta('O Token Expirou!', 'info');
          handleLogout();
        } else {
          ToastAlerta('Erro ao atualizar Usuário.', 'erro');
        }
      }
      setIsLoading(false);
      retornar();
    } else {
      ToastAlerta('Senhas inconsistentes', 'erro')
      setUsuarioAtualizado({ ...usuario, senha: '' });
      setConfirmaSenha('');
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-col items-center gap-3 justify-center border-b">
        <img src="./logo.png" alt="Logo Ajuda quem faz" className="w-14" />
        <h2 className="font-semibold text-2xl pb-3 text-center">Ajuda Quem Faz</h2>
      </div>

      <form
        action=""
        className="flex flex-col gap-2 p-4 min-w-96"
        onSubmit={atualizarUsuario}
      >
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="Novo nome"
          className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
          name="nome"
          id="nome"
          value={usuarioAtualizado.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        <label htmlFor="">Foto</label>
        <input
          type="text"
          placeholder="Insira URL da foto"
          className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
          name="foto"
          id="foto"
          value={usuarioAtualizado.foto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
          name="senha"
          value={usuarioAtualizado.senha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirmar Senha"
          className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
          name="confirmaSenha"
          value={confirmaSenha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
        />
        <label htmlFor="">Sobre</label>
        <textarea
          rows={5}
          className="border-2 rounded-lg text-base font-normal text-dark-black px-2 py-1"
          name="sobre"
          id="sobre"
          value={usuarioAtualizado.sobre}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoArea(e)}
        />

        <button className="text-xl mt-4 rounded-lg bg-secondary-purpleLight text-white py-1 hover:text-primary-orangeDark hover:bg-secondary-purple flex justify-center">
          {' '}
          {isLoading ? (
            <RotatingLines
              strokeColor="orange"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
              visible={true}
            />
          ) : (
            <span className="text-lg">{'Atualizar'}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
