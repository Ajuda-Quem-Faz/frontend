import Produto from './Produto';

export default interface Categoria {
  id: number;
  setor: string;
  tipoServico: string;
  produto?: Produto[] | null;
}
