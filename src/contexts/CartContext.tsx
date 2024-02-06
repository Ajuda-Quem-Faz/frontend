import { createContext, ReactNode, useState } from 'react';
import Produto from '../models/Produto';
import { ToastAlerta } from '../utils/ToastAlerta';
import Usuario from '../models/Usuario';

interface CartContextProps {
  adicionarProduto: (produto: Produto) => void;
  adicionarDoacao: (destino: Usuario, doacao: number) => void;
  removerProduto: (produtoId: number) => void;
  limparCart: () => void;
  items: any[];
  quantidadeItems: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  // Estado que armazenará os Produtos do Carrinho
  const [items, setItems] = useState<any[]>([]);

  // Estadoque retorna o número de itens do Carrinho
  const quantidadeItems = items.length;

  // Função para adicionar Produtos no Carrinho
  function adicionarProduto(produto: Produto) {
    const indice = items.find((items) => items.id === produto.id);
    if (indice !== undefined) {
      ToastAlerta('Este Produto já foi Adicionado!', 'info');
    } else {
      if (produto.foto) setItems((state) => [...state, produto]);
      ToastAlerta('Produto Adicionado!', 'sucesso');
    }
  }

  // Função para adicionar Produtos no Carrinho
  function adicionarDoacao(destino: Usuario, doacao: number) {
    if (doacao > 0) {
      destino.sobre = doacao.toString();
      setItems((state) => [...state, destino]);
    }
  }

  // Função para Remover um produto especifico do Carrinho
  function removerProduto(produtoId: number) {
    const indice = items.findIndex((items) => items.id === produtoId);
    let novoCart = [...items];

    if (indice >= 0) {
      novoCart.splice(indice, 1);
      setItems(novoCart);
    }
  }

  // Função para Limpar o Carrinho
  function limparCart() {
    ToastAlerta('Compra Efetuada com Sucesso', 'sucesso');
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        adicionarProduto,
        removerProduto,
        limparCart,
        items,
        quantidadeItems,
        adicionarDoacao,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
