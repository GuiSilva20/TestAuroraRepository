import { useEffect, useState } from "react";
import styles from './FiltrarProdutos.module.css';

interface Produto {
  nome: string;
  preco: number;
  estoque: number;
}

const FiltrarProdutos = () => {
  // Flag que indica se o filtro de "apenas disponíveis" está ativado.
  const [isFiltrandoDisponiveis, setIsFiltrandoDisponiveis] = useState(false);

  // Lista de produtos visível ao usuário (inicia vazia, será preenchida no useEffect).
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  // Lista "imutável" com todos os produtos da sessão. Usamos useState para manter consistência e reatividade.
  const [produtos] = useState<Produto[]>([
    { nome: "Produto A", preco: 10, estoque: 5 },
    { nome: "Produto B", preco: 20, estoque: 0 }, // sem estoque, será filtrado
    { nome: "Produto C", preco: 15, estoque: 3 },
  ]);

  useEffect(() => {
    // Assim que os produtos são definidos (ou atualizados), exibimos todos.
    // Isso é útil caso os dados venham de uma API no futuro.
    setProdutosFiltrados(produtos);
  }, [produtos]);

  // Filtra a lista para manter apenas produtos com estoque > 0
  const handleFiltrarDisponiveis = () => {
    setIsFiltrandoDisponiveis(true); // Ativa a flag de filtragem
    const produtosDisponiveis = produtos.filter(produto => produto.estoque > 0);
    setProdutosFiltrados(produtosDisponiveis);
  };

  // Restaura a lista original (sem filtros)
  const handleMostrarTodos = () => {
    setIsFiltrandoDisponiveis(false); // Desativa o modo de filtro
    setProdutosFiltrados(produtos);
  };

  return (
    <div className={styles.container}>
      {/* Botão que aplica o filtro de disponibilidade */}
      <button
        onClick={handleFiltrarDisponiveis}
        className={`${styles.button} ${isFiltrandoDisponiveis ? styles.buttonActive : styles.buttonInactive}`}
      >
        Filtrar Disponíveis
      </button>

      {/* Quando filtrando, mostra botão extra para resetar o filtro */}
      {isFiltrandoDisponiveis && (
        <button
          onClick={handleMostrarTodos}
          className={`${styles.button} ${styles.buttonActive} ${styles.buttonShowAll}`}
        >
          Mostrar Todos
        </button>
      )}

      {/* Renderiza a lista (filtrada ou completa) */}
      <div className={styles.productList}>
        <h2 className={styles.title}>Produtos:</h2>
        <ul>
          {produtosFiltrados.map((produto, index) => (
            <li key={index} className={styles.productItem}>
              <strong>{produto.nome}</strong> - R${produto.preco} - Estoque: {produto.estoque}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FiltrarProdutos;
