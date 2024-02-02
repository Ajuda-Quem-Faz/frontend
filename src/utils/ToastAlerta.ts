import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function ToastAlerta(mensagem: string, tipo: string) {

  const makeid = (length: number) => {
    var result = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
    }
  
    switch (tipo) {
      case 'sucesso':
        toast.success(mensagem, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
          toastId: "unique-random-text-xAu9C9-"
        });
        break;
  
      case 'info':
        toast.info(mensagem, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
          toastId: "unique-random-text-xAu9C9-"
        });
        break;
  
      case 'erro':
        toast.error(mensagem, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
          toastId: "unique-random-text-xAu9C9-"
        });
        break;
  
      default:
        toast.info(mensagem, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
          toastId: "unique-random-text-xAu9C9-"
        });
        break;
    }
  }