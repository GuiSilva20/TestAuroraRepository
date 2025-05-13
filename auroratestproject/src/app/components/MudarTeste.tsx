import React from 'react';
import styled from 'styled-components';

interface RadioToggleProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RadioToggle: React.FC<RadioToggleProps> = ({ isVisible, setIsVisible }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(event.target.value === 'Teste #1');
  };

  return (
    <Wrapper>
      <RadioOptions>
        <RadioOption>
          <RadioInput
            type="radio"
            name="toggle-radio"
            value="Teste #1"
            checked={isVisible}
            onChange={handleRadioChange}
          />
          <RadioLabel>Teste #1</RadioLabel>
        </RadioOption>
        <RadioOption>
          <RadioInput
            type="radio"
            name="toggle-radio"
            value="Teste #2"
            checked={!isVisible}
            onChange={handleRadioChange}
          />
          <RadioLabel>Teste #2</RadioLabel>
        </RadioOption>
      </RadioOptions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioOptions = styled.div`
  display: flex;
  width: 300px;
  background-color: #eee;
  border-radius: 0.5rem;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
`;

const RadioOption = styled.label`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: rgba(51, 65, 85, 1);
  transition: background-color 0.15s ease-in-out;

  ${RadioInput}:checked + & {
    background-color: #fff;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: scaleAnimation 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @keyframes scaleAnimation {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default RadioToggle;
