'use client';
import type { NextPage } from "next";
import Header from "./components/Header";
import InteractiveButton from "./components/InteractiveButton";
import TagValidator from "./components/TagValidator";
import SomaCondicional from "./components/SomaCondicional";
import FiltrarProdutos from "./components/FiltrarProdutos";
import CorrigirData from "./components/CorrigirData";
import FormularioValidado from "./components/FormularioValidado";
import Contador from "./components/Contador"; // Novo componente

import { useState } from "react";
import Card from "./components/Card";

const Home: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setActiveButton((prev) => (prev === label ? null : label));
  };

  return (
    <div>
      <Header />
      <main
        style={{
          padding: "40px",
          fontFamily: "Poppins, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >


        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <InteractiveButton
            label="< Validador de Tag />"
            isActive={activeButton === "Validador"}
            onClick={() => handleClick("Validador")}
          />
          <InteractiveButton
            label="Soma Condicional"
            isActive={activeButton === "Soma Condicional"}
            onClick={() => handleClick("Soma Condicional")}
          />
          <InteractiveButton
            label="Filtrar Produtos"
            isActive={activeButton === "Filtrar Produtos"}
            onClick={() => handleClick("Filtrar Produtos")}
          />
          <InteractiveButton
            label="Corrigir Data"
            isActive={activeButton === "Corrigir Data"}
            onClick={() => handleClick("Corrigir Data")}
          />
          <InteractiveButton
            label="Formulário Validado"
            isActive={activeButton === "Formulário Validado"}
            onClick={() => handleClick("Formulário Validado")}
          />
          <InteractiveButton
            label="Contador"
            isActive={activeButton === "Contador"}
            onClick={() => handleClick("Contador")}
          />
        </div>

        {/* Renderização condicional dos componentes */}
        {activeButton === "Validador" && <TagValidator />}
        {activeButton === "Soma Condicional" && <SomaCondicional />}
        {activeButton === "Filtrar Produtos" && <FiltrarProdutos />}
        {activeButton === "Corrigir Data" && <CorrigirData />}
        {activeButton === "Formulário Validado" && <FormularioValidado />}
        {activeButton === "Contador" && <Contador valorInicial={10}/>}

        <Card/>
      </main>
    </div>
  );
};

export default Home;
