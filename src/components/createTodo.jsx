/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import {v4 as uuid} from 'uuid'


const CreateTodo = ({Todos, setTodos, saveTodos}) => {
const [title, setTitle] = useState("")
const [isTyping, setIsTyping] =useState('Create a new todo...')


const inputRef = useRef()

const createTodo = (e)=>{
  e.preventDefault()
  
  if(!title) {
    return
  }
  const newTodo = {
    id: uuid(),
    title,
    complete: false
  } 

  if(newTodo) {

  const  newTodos = [...Todos, newTodo]
  saveTodos(newTodos)
  setTodos(newTodos) 
  }
  
  inputRef.current.value = ''
}

  return (

    <div className="mx-auto max-w-[35%] p-5 shadow-md rounded-lg mt-14">
    <form onSubmit={(e)=>{createTodo(e)}} className="flex justify-between items-center">
    <div className="flex gap-5">
    <input type="radio" />
    <input ref={inputRef} onFocus={()=>{setIsTyping('Currently typing...')}} placeholder={isTyping} onChange={(e)=>{setTitle(e.target.value)}} className="outline-none" />
    </div>
      <button type="submit" className="shadow-lg py-2 px-3 bg-slate-300 rounded-md">Create To do</button>
    </form>
    </div>
  )
}

export default CreateTodo;