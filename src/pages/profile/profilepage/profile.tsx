import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import ModalProfile from "../modalprofile/ModalProfile";
import { UserCircle } from "@phosphor-icons/react";

function profile() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === '') {
            ToastAlerta('Você precisa estar logado', '')
            navigate('/login')
        }
    }, [usuario.token])

    return (
        <div className="flex flex-col items-center mt-7 text-lg font-medium">
            <div className="flex flex-col items-center gap-3 justify-center border-b md:w-2/4 w-full">
                <img src="./logo.png" alt="Logo Ajuda quem faz" className="w-14" />
                <h2 className="font-semibold text-2xl pb-3 text-center">Ajuda Quem Faz</h2>

            </div>

            <div id="exibirPerfil" className="flex flex-col justify-center items-center p-6 w-2/3 gap-4">

                <div>
                    {usuario.foto != '' ? (
                        <img
                            src={usuario.foto}
                            alt={`foto do usuario ${usuario.nome}`}
                            className="object-cover border-2 border-secondary-purpleLight rounded-full bg-secondary-purpleLight size-52"
                        />
                    ) : (
                        <UserCircle
                            className="text-secondary-purpleLight text-center"
                            size={90}
                            weight="duotone"
                        />
                    )}
                </div>
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.usuario}</p>
                <p>Sobre: {usuario.sobre}</p>

                <span ><ModalProfile /></span>

            </div>

        </div>
    )
}

export default profile