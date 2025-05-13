import React, { useState } from "react";
import styled from "styled-components";

interface QuestionAnswer {
  question: string;
  answer: string;
}

const QandA: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questionsAndAnswers: QuestionAnswer[] = [
    {
      question: "Crie uma função em JavaScript que recebe um array de números e retorna apenas os números pares.",
      answer: `
      Resposta:
      function getNumerosPares(arr) {
        return arr.filter(num => num % 2 === 0);
      }

      // Exemplo de uso:
      const numeros = [1, 2, 3, 4, 5, 6];
      console.log(getNumerosPares(numeros)); // [2, 4, 6]
      `,
    },
    {
      question: "Analise o código abaixo e diga se há algo que poderia ser melhorado",
      answer: `
      Código:

      function App() {
        const [count, setCount] = useState(0);
        return (
          <div onClick={() => setCount(count + 1)}>
            Clique aqui! Contagem: {count}
          </div>
        );
      }

      Resposta:
      O código funciona corretamente, mas há uma melhoria que pode ser feita: quando o estado 'count' é atualizado, o valor mais recente não é garantido ao acessar a variável diretamente na função de atualização.
      
      A recomendação seria usar uma função de callback para garantir que o valor mais recente seja usado:

      <code>onClick={() => setCount(prevCount => prevCount + 1)}</code>
      
      Isso evita problemas caso o estado seja atualizado várias vezes em um curto período de tempo.
      `,
    },
  ];

  return (
    <QandAContainer>
      {questionsAndAnswers.map((qa, index) => (
        <QuestionWrapper key={index}>
          <Question onClick={() => handleQuestionClick(index)}>
            <QuestionText>{qa.question}</QuestionText>
            <ArrowIcon isOpen={openQuestionIndex === index}>↓</ArrowIcon>
          </Question>
          {openQuestionIndex === index && <Answer>{qa.answer}</Answer>}
        </QuestionWrapper>
      ))}
    </QandAContainer>
  );
};

// Styled Components

const QandAContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  padding: 1rem;
  transition: all 0.3s ease;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #2d3748;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const QuestionText = styled.span`
  flex: 1;
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  font-size: 1.2rem;
`;

const Answer = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #f9fafb;
  border-left: 4px solid #34d399;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  white-space: pre-wrap; /* To keep the line breaks in the answer */
`;

export default QandA;
