import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <span className="todo-status">
        {todo.done ? 'Done' : 'Not done'}
      </span>
    </div>
  )
}

export default Todo