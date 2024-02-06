import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

function ListaProjeto() {
    useEffect(() => {
      document.title = 'Ajuda quem Faz - Produtos';
    }, []);
  
    const { usuario } = useContext(AuthContext);
    const token = usuario.token ?? localStorage.getItem('token');
  
    let { param } = useParams();
  
    console.log('param: ' + param);
  
    const [projeto, setProjeto] = useState<Projeto[]>([]);
  
    async function listarProduto() {
      await buscarProjetos('/produtos', setProjeto);
    }

    var Skeleton = (
        <div className="flex-col items-center justify-center rounded-[3rem] animate-pulse">
          <div className="card-main">
            <div className="bg-gray-200 flex flex-col items-center h-32 min-[375px]:h-46 sm:h-48 md:h-56 w-full md:rounded-[3rem] rounded-3xl" />
          </div>
          <div className="flex flex-col mt-2 items-center justify-center gap-1">
            <div className="font-semibold text-center min-h-[1lh] rounded-2xl w-32 bg-gray-200" />
            <div className="font-semibold text-center min-h-[1lh] rounded-2xl w-32" />
            <div className="flex justify-between items-center w-full flex-row-reverse px-4">
              <div className="p-2 px-5 rounded-2xl bg-gray-200">
                <div className="size-[14px]" />
              </div>
              <div className="flex flex-col">
                <div className="text-xs tabular-nums bg-gray-200 rounded-2xl h-[1lh] w-24"></div>
                <div className=" font-semibold bg-gray-200 rounded-2xl h-[1lh] mt-1 w-24"></div>
              </div>
            </div>
          </div>
        </div>
      );
