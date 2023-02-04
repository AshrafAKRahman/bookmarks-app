import React, { useEffect, useState } from "react";
// import './Todo.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [editedTodo, setEditedTodo] = useState("");
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = (prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime(),
        todoText: todo,
        isCompleted: false,
        ...todo,
      },
    ];

    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newTodos = (prevTodos) => prevTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (e, id) => {
    e.preventDefault();
    const newTodos = [...todos].map((todo) => {
      if (id === todo.id) {
        todo.todoText = editedText;
      }
      return todo;
    });
    setTodos(newTodos);
    setEditedTodo(null);
  };

  const toggleTodoState = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const setInputFocus = (input) => {
    if (input !== null) {
      input.focus();
    }
  };

  return (
    <div className="todo-card">
      <div className="todos-wrapper">
        <h3 className="todo-heading">Todos</h3>
        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            onChange={(e) => {
              setTodo(e.target.value);
              console.log(todo);
            }}
            value={todo}
            ref={setInputFocus}
          />
          <button type="submit" className="btn-add">
            Add +
          </button>
        </form>
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {todo.id === editedTodo ? (
              <div className="todo-wrapper">
                <form onSubmit={(e) => editTodo(e, todo.id)}>
                  <input
                    type="text"
                    className="todo-input input-edit"
                    onChange={(e) => setEditedText(e.target.value)}
                    defaultValue={todo.todoText}
                    ref={setInputFocus}
                  />
                </form>
                <button
                  className="todo-controls cancel"
                  onClick={() => setEditedTodo("")}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="todo-wrapper">
                <span
                  className={
                    "todo-text" + (todo.isCompleted === true && "completed")
                  }
                >
                  {todo.todoText}
                </span>
                <div className="todo-controls">
                  {todo.isCompleted === true ? (
                    <ImCheckboxChecked
                      onClick={() => toggleTodoState(todo.id)}
                    />
                  ) : (
                    <ImCheckboxUnchecked
                      onClick={() => toggleTodoState(todo.id)}
                    />
                  )}
                  <RiDeleteBin6Line onClick={() => deleteTodo(todo.id)} />
                  <AiFillEdit onClick={() => setEditedTodo(todo.id)} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
