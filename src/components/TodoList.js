import React from 'react';

const TodoList = () => {
  const todos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Pay bills', completed: true },
    { id: 3, text: 'Do laundry', completed: false }
  ];

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
