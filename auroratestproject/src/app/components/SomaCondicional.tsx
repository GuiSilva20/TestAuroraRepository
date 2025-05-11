/* eslint-disable @typescript-eslint/no-explicit-any */
/* SomaCondicional.tsx */
import React, { useState } from "react";
import styles from "./SomaCondicional.module.css"; // Importando o módulo CSS

// Função que soma apenas números válidos
function somaSomenteNumerosValidos(arr: any[]): number {
  return arr.reduce((acc, val) => {
    if (
      typeof val === "number" &&
      !isNaN(val) &&
      val !== null &&
      val !== undefined &&
      val >= 0
    ) {
      return acc + val;
    }
    return acc;
  }, 0);
}

const SomaCondicional: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([""]);

  // Atualiza o valor de um input específico
  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Adiciona um novo campo
  const adicionarCampo = () => {
    setInputs([...inputs, ""]);
  };

  // Remove um campo pelo índice
  const removerCampo = (index: number) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  // Processa valores
  const parsedValues = inputs.map((val) => {
    const parsed = Number(val.trim());
    return isNaN(parsed) ? val : parsed;
  });

  const soma = somaSomenteNumerosValidos(parsedValues);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Soma Condicional</h2>
      {inputs.map((val, index) => {
        const parsed = Number(val.trim());
        const isInvalid =
          val.trim() === "" ||
          isNaN(parsed) ||
          parsed < 0 ||
          typeof parsed !== "number";

        return (
          <div key={index} className={styles.inputWrapper}>
            <input
              type="text"
              value={val}
              onChange={(e) => handleChange(index, e.target.value)}
              className={`${styles.inputField} ${isInvalid ? styles.inputInvalid : ""}`}
              placeholder="Digite um número"
            />
            <button onClick={() => removerCampo(index)} className={styles.removeButton}>
              🗑️
            </button>
            {isInvalid && val.trim() !== "" && (
              <p className={styles.errorMessage}>Ignorado na soma</p>
            )}
          </div>
        );
      })}

      <button onClick={adicionarCampo} className={styles.addButton}>
        + Adicionar Campo
      </button>

      <h3 className={styles.somaFinal}>Soma dos Válidos: {soma}</h3>
    </div>
  );
};

export default SomaCondicional;
