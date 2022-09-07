import React from "react";
import Todo from "../todo/Todo";
import "./CompletedTodos.scss";

const CompletedTodos = ({ todos, onChanged }) => {
  // console.log(todos);
  const checkNull = () => {
    if (todos == null || todos.length == 0) {
      return (
        <div>
          <p>No completed todos yet</p>
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
  return <div className="completed-todos">{checkNull()}</div>;
};

export default CompletedTodos;
