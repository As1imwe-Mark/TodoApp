/* eslint-disable react/prop-types */

import { useState } from "react";
import TodoCard from "./TodoCard";

const Todo = ({ Todos, setTodos, saveTodos }) => {

  const [filter, setFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  
 
  const check = (id) => {
    Todos = Todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );

    saveTodos(Todos);
    setTodos(Todos);
  };


      const Completed = Todos.filter((todo) => todo.complete === true);
    
      const open = Todos.filter((todo) => todo.complete === false);
    
  

  const clearCompleted = () => {
    const completed = Todos.filter((todo) => {
      return todo.complete === false;
    });
    saveTodos(completed);
    setTodos(completed);
    setFilter('all')
  };

  const deleteTodo = (id) => {
    const newTodos = Todos.filter((todo) => todo.id !== id);
    saveTodos(newTodos);
    setTodos(newTodos);
  };


  return (
    <div className="mx-auto max-w-[35%] p-5 shadow-md rounded-lg mt-7">
    {
      filter ==='all' && <TodoCard Todos={Todos} isEditing={isEditing} setIsEditing={setIsEditing} deleteTodo ={deleteTodo} check={check} filter={filter} setFilter ={setFilter} clearCompleted={clearCompleted} setTodos={setTodos} saveTodos={saveTodos}/>
    }
     {
      filter === 'open'&& <TodoCard Todos={open} deleteTodo ={deleteTodo} check={check} filter={filter} setFilter ={setFilter} clearCompleted={clearCompleted} setTodos={setTodos} saveTodos={saveTodos} isEditing={isEditing} setIsEditing={setIsEditing}/>
      } 
     {
      filter === 'complete' && <TodoCard Todos={Completed} deleteTodo ={deleteTodo} check={check} filter={filter} setFilter ={setFilter} clearCompleted={clearCompleted}/>
      } 
      
    </div>
  );
};

export default Todo;
