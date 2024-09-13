/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CreateTodo from "./createTodo";
import Todo from "./Todo";

const Todos = () => {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [Todos, setTodos] = useState([]);

  const saveTodos = (newItems) => {
    localStorage.setItem("todos", JSON.stringify(newItems));
  };

  useEffect(() => {
    setTodos(storedTodos);
  }, []);

  return (
    <>
      <CreateTodo Todos={Todos} setTodos={setTodos} saveTodos={saveTodos} />
      <Todo Todos={Todos} setTodos={setTodos} saveTodos={saveTodos} />
    </>
  );
};

export default Todos;
