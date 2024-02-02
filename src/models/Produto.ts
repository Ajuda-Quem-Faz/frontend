import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
<<<<<<< HEAD
  categoria?: Categoria | null;
  usuario?: Usuario | null;
=======
  categoria: Categoria | null;
  usuario: Usuario | null;
>>>>>>> 9fde2f7ec237e1bcbe12da086542bc5dda929292
}