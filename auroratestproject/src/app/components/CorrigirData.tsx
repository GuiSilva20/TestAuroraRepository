// CorrigirData.tsx
import React, { useState, useEffect } from 'react';
import styles from './CorrigirData.module.css';
import { getHoraBrasilia } from './utils/data';

const CorrigirData: React.FC = () => {
  const [dataISO, setDataISO] = useState<string>('');

  useEffect(() => {
    const atualizarData = () => {
      const agora = new Date().toISOString();
      setDataISO(agora);
    };

    atualizarData(); // inicializa imediatamente
    const intervalo = setInterval(atualizarData, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const dataFormatada = getHoraBrasilia(dataISO);

  const renderDataCard = (label: string, valor: string) => (
    <>
      <h3 className={styles.headingSubtitle}>{label}</h3>
      <div className={styles.card}>
        {valor ? (
          <p className={styles.dataText}>{valor}</p>
        ) : (
          <div className={styles.dataText}>
            <div className={styles.skeleton} />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {renderDataCard('ISO (UTC)', dataISO)}
      {renderDataCard('Horário de Brasília', dataFormatada)}
    </div>
  );
};

export default CorrigirData;
