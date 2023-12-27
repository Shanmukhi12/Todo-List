import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const Todo = ({task, deleteTodo, editTodo, handleChange}) => {
    const handleCheckBoxChange = () => {
        if(task.done)
            return null
            handleChange(task.id)
    }
  return (
    
    <div className="Todo">
        
        <input type = "checkbox" checked = {task.done} onChange = {()=> handleCheckBoxChange()} />
        
        <span style={task.done?{textDecoration:'line-through'}:null}>{task.task}</span>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}