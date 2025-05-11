import React, { useState } from "react";
import styles from "./TagValidator.module.css"; // Importa o CSS module

// Função que valida se a string contém tags HTML bem formadas
function isValidHTMLTags(input: string): boolean {
  if (!input.trim().startsWith("<")) return false;

  const tagStack: string[] = [];
  const tagPattern = /<\/?\s*([a-zA-Z][a-zA-Z0-9]*|\s*)\s*\/?>/g;

  let match;
  while ((match = tagPattern.exec(input)) !== null) {
    const [fullTag, rawTagName] = match;
    const tagName = rawTagName.trim();
    const isFragment = tagName === "";
    const isClosing = fullTag.startsWith("</");

    if (isFragment) {
      if (isClosing && tagStack.pop() !== "") return false;
      if (!isClosing) tagStack.push("");
    } else {
      if (isClosing && tagStack.pop() !== tagName) return false;
      if (!isClosing && !isSelfClosingTag(fullTag)) tagStack.push(tagName);
    }
  }

  return tagStack.length === 0;
}

// Função que verifica se a tag é auto-fechante
function isSelfClosingTag(tag: string): boolean {
  return tag.endsWith("/>") || /\/\s*>$/.test(tag);
}

const TagValidator: React.FC = () => {
  const [input, setInput] = useState("");

  const trimmedInput = input.trim();
  const isEmpty = trimmedInput === "";
  const isValid = isValidHTMLTags(trimmedInput);

  const { borderColor, message, messageColor } = getValidationMessage(isValid, isEmpty);

  return (
    <div className={styles.container}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        className={`${styles.textarea} ${borderColor}`} // Aplica a classe condicionalmente
        placeholder="Digite HTML aqui..."
      />
      <p className={`${styles.message} ${messageColor}`}>{message}</p>
    </div>
  );
};

// Função que determina as mensagens e classes de estilo baseadas na validação
function getValidationMessage(isValid: boolean, isEmpty: boolean) {
  if (isEmpty) {
    return {
      borderColor: "",
      message: "Digite HTML para validar",
      messageColor: "",
    };
  }

  const borderColor = isValid ? styles.success : styles.error;
  const message = isValid ? "Correto ✅" : "Incorreto ❌";
  const messageColor = isValid ? styles.success : styles.error;

  return { borderColor, message, messageColor };
}

export default TagValidator;
