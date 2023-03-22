import React, { useState, useReducer } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: newTodoText,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  return (
    <div className="">
      <h1 className="my-3">Todo List ✏️</h1>
      <div className="row my-3">
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-4">
          <button onClick={handleAddTodo}>Add todo</button>
        </div>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.text}
            <button
              className="float-end"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
