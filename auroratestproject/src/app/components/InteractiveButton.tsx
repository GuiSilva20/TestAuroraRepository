import React from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const InteractiveButton: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <StyledWrapper>
      <button
        className="cssbuttons-io-button"
        onClick={onClick}
        style={{
          backgroundColor: isActive ? "#0066cc" : "#cccccc",
          color: isActive ? "#ffffff" : "#333333",
          boxShadow: isActive
            ? "0 4px 12px rgba(0, 102, 204, 0.4)"
            : "0 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {label}
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fly = keyframes`
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translateY(-0.1em);
  }
`;

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: #0000FF;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #0000FF;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    transition: all 0.3s ease-in-out;
    margin: 10px;  /* Adicionado para criar o espaço ao redor do botão */
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #0000FF;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #0000FF;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

export default InteractiveButton;
