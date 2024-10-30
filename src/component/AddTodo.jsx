import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/todos/todoSlice"

const AddTodo = () => {

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
    
        e.preventDefault()

        dispatch(addTodo(input))
    }
  return (
    <form className="space-x-3 mt-12" onSubmit={addTodoHandler}>

      <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-200 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 ease-in-out py-1 px-3 leading-8 transition-colors duration-200" placeholder="enter todo" value={input} onChange={(e) => setInput(e.target.value)}/>

         <button type="submit" className=" border-b px-6 outline-none rounded text-lg">
            Add Todo
         </button>
    </form>
  )
}

export default AddTodo