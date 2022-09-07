import React from "react";
import "./Todo.scss";

const Todo = ({ id, title, completed, onChanged }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        name=""
        id={id}
        className="todo-checkbox"
        checked={completed}
        onChange={(e) => onChanged(id, e.target.checked)}
        style={{
          accentColor: completed ? "grey" : "",
        }}
      />
      <label
        htmlFor={id}
        style={{
          color: completed ? "grey" : "black",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </label>
    </div>
  );
};

export default Todo;
