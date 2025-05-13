import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Define o formato dos dados recebidos da API
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const APIGetter: React.FC = () => {
  // Lista de tarefas e input controlado
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Busca 10 tarefas da API ao carregar o componente
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data: Todo[] = await res.json();
        setTodos(data.slice(0, 10)); // pega só as 10 primeiras
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchTodos();
  }, []);

  // Alterna o status de conclusão de uma tarefa
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Adiciona uma nova tarefa à lista
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask: Todo = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos((prev) => [newTask, ...prev]);
    setNewTodo(""); // limpa o campo de texto
  };

  return (
    <Container>
      <Title>Minhas Tarefas</Title>

      <AddTaskContainer>
        <Input
          type="text"
          placeholder="Nova tarefa..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton onClick={addTodo}>Adicionar</AddButton>
      </AddTaskContainer>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} completed={todo.completed}>
            <Label htmlFor={`todo-${todo.id}`}>
              <Checkbox
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <Text completed={todo.completed}>{todo.title}</Text>
            </Label>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};


// Container principal da página
const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

// Título da página
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: black;
`;

// Lista de tarefas
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Cada item da lista muda de cor se estiver completo
const ListItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ completed }) => (completed ? "#e6ffed" : "#f3f4f6")};
  border: 1px solid ${({ completed }) => (completed ? "#34d399" : "#d1d5db")};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ completed }) => (completed ? "#d1fae5" : "#e5e7eb")};
  }
`;

// Label que envolve checkbox + texto
const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

// Checkbox de cada tarefa
const Checkbox = styled.input`
  margin-right: 0.75rem;
  width: 1rem;
  height: 1rem;
`;

// Texto da tarefa, com ou sem risco conforme o status
const Text = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed: boolean }>`
  color: ${({ completed }) => (completed ? "#065f46" : "#111827")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  font-size: 1rem;
  transition: all 0.2s ease;
`;

// Container do campo de adicionar tarefa
const AddTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

// Input da nova tarefa
const Input = styled.input`
  width: 70%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
`;

// Botão de adicionar
const AddButton = styled.button`
  width: 25%;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #34d399;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2bb26c;
  }
`;

export default APIGetter;
