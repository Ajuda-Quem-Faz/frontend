import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import ModalProfile from "../modalprofile/ModalProfile";
import { UserCircle } from "@phosphor-icons/react";


function Profile() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === '') {
            ToastAlerta('Você precisa estar logado', '')
            navigate('/login')
        }
    }, [usuario.token])

    useEffect(() => {
        console.log(usuario)
    }, [usuario])

    return (
        <div className="flex flex-col items-center mt-7 text-lg font-medium mx-20">
            <div className="flex flex-col items-center gap-3 justify-center border-b md:w-2/4 w-full">
                <img src="./logo.png" alt="Logo Ajuda quem faz" className="w-14" />
                <h2 className="font-semibold text-2xl pb-3 text-center">Ajuda Quem Faz</h2>

            </div>

            <div id="exibirPerfil" className="flex items-center justify-center lg:flex-row-reverse p-6 gap-4 flex-col-reverse">

                <div className="flex flex-col gap-5 w-auto">
                    <p className="text-lg">Nome: {usuario.nome}</p>
                    <p className="text-lg">Email: {usuario.usuario}</p>
                    <p className="text-lg">Sobre: {usuario.sobre}</p>
                    <span className="text-center mt-3"><ModalProfile /></span>
                </div>

                <div className="flex justify-center items-center gap-4 pt-2 mx-14">
                    {usuario.foto != '' ? (
                        <img
                            src={usuario.foto}
                            alt={`foto do usuario ${usuario.nome}`}
                            className="object-cover shadow-2xl rounded-3xl h-auto max-w-xs mx-auto"
                        />
                    ) : (
                        <UserCircle
                            className="text-secondary-purpleLight text-center text-[12rem]"
                            weight="duotone"
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default Profile