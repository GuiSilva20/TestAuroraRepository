import React, { useState, useEffect } from 'react';
import styles from './FormularioValidado.module.css';

const FormularioValidado: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState<string[]>([]);

  useEffect(() => {
    const novosErros: string[] = [];

    if (nome.trim().length < 3) {
      novosErros.push('Nome inválido');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      novosErros.push('Email inválido');
    }

    const senhaRegex = /^(?=.*[0-9]).{8,}$/;
    if (!senhaRegex.test(senha)) {
      novosErros.push('Senha fraca');
    }

    setErros(novosErros);
  }, [nome, email, senha]);

  const isValido = (campo: string, tipo: 'nome' | 'email' | 'senha') => {
    switch (tipo) {
      case 'nome':
        return campo.trim().length >= 3;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo);
      case 'senha':
        return /^(?=.*[0-9]).{8,}$/.test(campo);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Formulário com Validação</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={`${styles.input} ${isValido(nome, 'nome') ? styles.valid : styles.invalid}`}
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${styles.input} ${isValido(email, 'email') ? styles.valid : styles.invalid}`}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className={`${styles.input} ${isValido(senha, 'senha') ? styles.valid : styles.invalid}`}
      />

      {erros.length > 0 && (
        <div className={styles.erros}>
          <strong>Erros:</strong>
          <ul>
            {erros.map((erro, index) => (
              <li key={index}>{erro}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormularioValidado;
