'use client'; // Garantir que este arquivo seja executado no cliente

import React, { useState } from "react";
import Header from "./components/Header";
import InteractiveButton from "./components/InteractiveButton";
import TagValidator from "./components/TagValidator";
import SomaCondicional from "./components/SomaCondicional";
import FiltrarProdutos from "./components/FiltrarProdutos";
import CorrigirData from "./components/CorrigirData";
import FormularioValidado from "./components/FormularioValidado";
import Contador from "./components/Contador";
import Card from "./components/Card";
import type { NextPage } from "next";
import Relogio from "./components/Relogio";
import APIGetter from "./components/APIGetter";
import QandA from "./components/QandA";

const Home: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);  // Controle de visibilidade

  const handleClick = (label: string) => {
    setActiveButton((prev) => (prev === label ? null : label));
  };

  return (
    <div>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />  {/* Passando isVisible e setIsVisible */}

      <main
        style={{
          padding: "40px",
          fontFamily: "Poppins, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {isVisible && (
          <>
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

            {activeButton === "Validador" && <TagValidator />}
            {activeButton === "Soma Condicional" && <SomaCondicional />}
            {activeButton === "Filtrar Produtos" && <FiltrarProdutos />}
            {activeButton === "Corrigir Data" && <CorrigirData />}
            {activeButton === "Formulário Validado" && <FormularioValidado />}
            {activeButton === "Contador" && <Contador valorInicial={10} />}


          </>
        )}

        {!isVisible && (
          <>
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
                label="ToDo List"
                isActive={activeButton === "APIGetter"}
                onClick={() => handleClick("APIGetter")}
              />

              <InteractiveButton
                label="Relógio"
                isActive={activeButton === "Relogio"}
                onClick={() => handleClick("Relogio")}
              />
               <InteractiveButton
                label="Perguntas"
                isActive={activeButton === "QandA"}
                onClick={() => handleClick("QandA")}
              />


            </div>
            {activeButton === "APIGetter" && <APIGetter />}
            {activeButton === "Relogio" && <Relogio />}
            {activeButton === "QandA" && <QandA />}


          </>
        )}

        <Card />
      </main>
    </div>
  );
};

export default Home;
