import React from "react";
import styles from "./Header.module.css";
import MudarTeste from "./MudarTeste";

interface HeaderProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isVisible, setIsVisible }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{'<AI/>'}</h1>
      </div>
      <MudarTeste isVisible={isVisible} setIsVisible={setIsVisible} />
    </header>
  );
};

export default Header;
