import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import "./UncompletedTodos.scss";

const UncompletedTodos = ({ todos, onChanged }) => {
  //   console.log(todos);
  const checkNull = () => {
    if (todos == null || todos.length == 0) {
      return (
        <div>
          <p>No new todos yet</p>
        </div>
      );
    } else {
      return todos.map((todo) => (
        <Todo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
          onChanged={onChanged}
        />
      ));
    }
  };
  return <div className="todos">{checkNull()}</div>;
};

UncompletedTodos.propTypes = {
  todos: PropTypes.array,
};

export default UncompletedTodos;
