import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos/todoSlice";

const Todo = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editid, setEditid] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (todo) => {
    setEditid(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
      dispatch(updateTodo({id, text: editText}))
      setEditid(null)
  }


  console.log(todos);
  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
          key={todo.id}
        >
          {editid === todo.id ? (
             <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="text-black px-2 py-1 rounded"/>
          ):(
            <div>{todo.text}</div>
          )}

          <div className="flex gap-3">
            
            {editid === todo.id ? (

              <button className="text-white bg-green-500 border-0 px-4 focus:outline-none hover:bg-green-600 rounded text-base" onClick={() => handleSave(todo.id)}>
              Save
            </button> 
            ):(

              <button className="text-white bg-green-500 border-0 px-4 focus:outline-none hover:bg-green-600 rounded text-base" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            )}

            <button
              className="text-white bg-red-500 border-0 px-4 focus:outline-none hover:bg-red-600 rounded text-base"
              onClick={(e) => dispatch(removeTodo(todo.id))}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
