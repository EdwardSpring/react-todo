import React from "react";
import "./AddTodo.scss";

const AddTodo = ({ newTodo }) => {
  return (
    <div className="text-container">
      <div className="todo-field-container">
        <input
          type="text"
          className="add-todo-field"
          placeholder="Add new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              var todo = {
                title: e.target.value,
                completed: false,
                userId: 1,
                id: null,
              };

              newTodo(todo);
              e.target.value = "";
            }
          }}
        />
      </div>

      <div className="add-todo-container">
        <button className="add-todo-btn">
          <img
            src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png"
            onClick={(e) => {
              var input = document.querySelector(".add-todo-field");

              var todo = {
                title: input.value,
                completed: false,
                userId: 1,
                id: null,
              };

              newTodo(todo);
              input.value = "";
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
