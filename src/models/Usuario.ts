import Produto from './Produto';

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  sobre: string;
  foto: string;
  senha: string;
  produto?: Produto | null;
  doacao?: string | null;
}
