// components/Contador.tsx
'use client'; // Necessário para habilitar interatividade em componentes server-side no Next.js 13+

import { useState } from 'react';
import styles from './Contador.module.css'; // Importa os estilos CSS modules para escopo local

// Hook customizado para encapsular a lógica do contador
const useContador = (valorInicial: number) => {
  const [valor, setValor] = useState(valorInicial); // Estado interno do contador

  // Incrementa o valor atual
  const incrementar = () => setValor((prev) => prev + 1);

  // Decrementa o valor atual
  const decrementar = () => setValor((prev) => prev - 1);

  // Reseta o valor para o estado inicial informado
  const resetar = () => setValor(valorInicial);

  // Retorna a API do hook: valor e manipuladores
  return { valor, incrementar, decrementar, resetar };
};

// Componente funcional principal que usa o hook personalizado
const Contador = ({ valorInicial }: { valorInicial: number }) => {
  // Desestrutura a lógica vinda do hook useContador
  const { valor, incrementar, decrementar, resetar } = useContador(valorInicial);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Contador</h2>

      {/* Exibe o valor atual do contador */}
      <div className={styles.value}>{valor}</div>

      {/* Botões de controle: incrementa, decrementa e reseta */}
      <div>
        <button className={`${styles.button} ${styles.incrementar}`} onClick={incrementar}>
          Incrementar
        </button>
        <button className={`${styles.button} ${styles.decrementar}`} onClick={decrementar}>
          Decrementar
        </button>
        <button className={`${styles.button} ${styles.resetar}`} onClick={resetar}>
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Contador;
