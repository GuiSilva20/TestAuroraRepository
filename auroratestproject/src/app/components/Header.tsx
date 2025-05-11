// components/Header.tsx

import React from "react";
import styles from "./Header.module.css"; // Importando o CSS modular

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>AURORA INTELIGÊNCIA - TESTE TÉCNICO PERSONALIZADO</h1>
      </div>
    </header>
  );
};

export default Header;
