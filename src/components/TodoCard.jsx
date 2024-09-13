/* eslint-disable react/prop-types */

import { useState } from "react"

const TodoCard = ({Todos, deleteTodo, check,filter, setFilter,clearCompleted,isEditing, setIsEditing, saveTodos, setTodos}) => {
  const [newTitle, setNewTitle] = useState("")
  const [editIndex, setIndex] = useState(null)


  const saveEdit=(id)=>{

    const editedTodos = Todos.map(todo => todo.id === id ? {...todo, title:newTitle}: todo)
    saveTodos(editedTodos)
    setTodos(editedTodos)
    setIsEditing(!isEditing)
  }

  const Edit =(index)=>{
    Todos.find((t,Index)=>{
      if(Index === index ){
        setIsEditing(!isEditing)
        setIndex(Index)
      }
    })
  }
    
  
  return (
    <div>
  {Todos?.map((todo,index) => {
        return (
          <div
            key={todo.id}
            className="flex items-center justify-between mb-3 border-b"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                onClick={() => {
                  check(todo.id);
                }}
              >
                {todo.complete === true ? (
                  <div className="w-6 h-6 text-center rounded-full border-[] text-white bg-gradient-to-r from-[#57ddff] to-[#c058f3]">
                    &#10003;
                  </div>
                ) : (
                  <input className="text-xl w-6 h-6" name="" type="radio" />
                )}
              </span>
              {
                isEditing && editIndex === index ? <input className="outline-none" onChange={(e)=>{setNewTitle(e.target.value)}}/> : <span
                className={
                  todo.complete === true
                    ? "ml-4 font-semibold text-gray-300 line-through"
                    : "ml-4 font-semibold"
                }
              >
                {todo.title}
              </span>
              }
              
            </div>
            <div className="flex items-center gap-1">
            {
              isEditing && editIndex === index ? <button
              onClick={() => {
                saveEdit(todo.id);
              }}
              className="text-gray-500 font-light text-sm"
            >
            &#128190;  
            </button> : <button
              onClick={() => {
                Edit(index);
              }}
              className="text-gray-500 font-light text-sm"
            >
              &#9998;
            </button>
            }
            
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="text-gray-500 font-light text-4xl"
            >
              &#215;
            </button>
            
            </div>
           
          
          </div>
        );
      })}

      <div className="flex items-center justify-between font-semibold ">
        <span className="font-medium text-sm text-gray-400">
          {Todos.length} items left
        </span>
        <div className="flex gap-3">
          <button
            className={filter === 'all' ? "text-[#3a7bfd]" : "text-gray-700"}
            onClick={()=>{setFilter('all')}}
          >
            All
          </button>
          <button
            className={filter === 'open' ? "text-[#3a7bfd]" : "text-gray-700 active:text-gray-900"}
            onClick={()=>{setFilter('open')}}
          >
            Active
          </button>
          <button
            className={filter === 'complete'? "text-[#3a7bfd]" : "text-gray-700"}
            onClick={()=>{setFilter('complete')}}
          >
            Completed
          </button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      
    </div>
  )
}

export default TodoCard