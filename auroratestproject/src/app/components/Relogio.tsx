// Relogio.tsx
import React, { useState, useEffect } from 'react';
import styles from './CorrigirData.module.css';
import Clock from './Clock';
import { getHoraBrasilia } from './utils/data';

// Componente funcional Relogio que exibe a hora atual em Brasília
const Relogio: React.FC = () => {
  // Estado para armazenar a hora formatada de Brasília
  const [horaBrasilia, setHoraBrasilia] = useState<string>('');

  useEffect(() => {
    // Função para atualizar a hora atual em Brasília
    const updateHoraBrasilia = () => {
      const agora = new Date(); // Obtém a data e hora atuais
      const horaFormatada = getHoraBrasilia(agora.toISOString()); // Formata a data para o fuso horário de Brasília
      setHoraBrasilia(horaFormatada); // Atualiza o estado com a nova hora formatada
    };

    updateHoraBrasilia(); // Chama a função imediatamente para definir a hora inicial
    const intervalo = setInterval(updateHoraBrasilia, 1000); // Define um intervalo para atualizar a hora a cada segundo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []); // O efeito é executado apenas uma vez após a montagem do componente

  return (
    <div className={styles.container}>
      <h2 className={styles.headingTitle}>Hora Atual (Brasília):</h2>
      <div className={styles.card}>
        {horaBrasilia ? ( // Condicional para verificar se a hora já foi definida
          <p className={styles.dataText}>{horaBrasilia}</p> // Exibe a hora formatada
        ) : (
          <div className={styles.dataText}>
            <div className={styles.skeleton} /> {/* Exibe um indicativo de carregamento enquanto a hora não está disponível */}
          </div>
        )}
      </div>

      <div className={styles.clockWrapper}>
        <Clock /> {/* Inclui o componente Clock que pode mostrar uma representação visual do tempo */}
      </div>
    </div>
  );
};

export default Relogio; // Exporta o componente Relogio para ser utilizado em outras partes da aplicação