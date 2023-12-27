import React, { useState } from "react";
import { Todo } from "./Todo";
import { Todoform } from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import { Edit } from "./Edit";

export const TodoPage = () => { 
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

    const handleCheckBoxChange= (id) => {
        const newtodoList = todos.map(todo=>{
            if(todo.id === id)
                return {...todo,done:!todo.done}
            return todo
        })
        setTodos(newtodoList)
    }
  
  
  return (
    <div className="TodoPage">
      <h1>To-Dos</h1>
      <Todoform addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <Edit editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleChange = {handleCheckBoxChange}
          />
        )
      )}
    </div>
  );
};
 
