import React, { useState, useEffect } from 'react';
import styles from './CorrigirData.module.css';

// Função para converter a data ISO para o horário de Brasília
const converterDataISOParaBrasilia = (dataISO: string): string => {
  const data = new Date(dataISO);
  data.setHours(data.getUTCHours() - 3);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
};

const CorrigirData: React.FC = () => {
  const [dataISO, setDataISO] = useState<string>('');
  const [dataCorrigida, setDataCorrigida] = useState<string>('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      const data = new Date();
      const iso = data.toISOString();
      setDataISO(iso);
      setDataCorrigida(converterDataISOParaBrasilia(iso));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.headingTitle}>Data e Hora em ISO:</h2>
      <div className={styles.card}>
        {dataISO ? (
          <p className={styles.dataText}>{dataISO}</p>
        ) : (
          <div className={styles.dataText}>
            <div className={styles.skeleton} />
          </div>
        )}
      </div>

      <h3 className={styles.headingSubtitle}>Data Corrigida (Horário de Brasília):</h3>
      <div className={styles.card}>
        {dataCorrigida ? (
          <p className={styles.dataText}>{dataCorrigida}</p>
        ) : (
          <div className={styles.dataText}>
            <div className={styles.skeleton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CorrigirData;
