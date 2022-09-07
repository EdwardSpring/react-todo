import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import AddTodo from "./components/add-todo/AddTodo";
import UncompletedTodos from "./components/uncompleted-todos/UncompletedTodos";
import CompletedTodos from "./components/completed-todos/CompletedTodos";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";

function App() {
  var initial = [];

  const fetchTodos = async () => {
    var url = "https://jsonplaceholder.typicode.com/todos";
    var request = new Request(url);
    // request.method = "GET";
    var response = await fetch(request);

    return response.json();
  };

  useEffect(() => {
    fetchTodos().then((todos) => {
      settodos(todos.filter((todo) => todo.userId == 1));
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  const [todos, settodos] = useState(initial);

  var completedTodos = todos
    .filter((todo) => todo.completed)
    .sort((a, b) => b.id - a.id);
  var uncompletedTodos = todos
    .filter((todo) => !todo.completed)
    .sort((a, b) => b.id - a.id);

  const whenChecked = (id, completed) => {
    // const newArray = todos.slice();
    // newArray
    //   .filter((todo) => todo.id == id)
    //   .map((todo) => (todo.completed = completed));

    // settodos(newArray);

    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const newTodo = (todo) => {
    var last = todos.sort((a, b) => a.id - b.id)[todos.length - 1];
    todo.id = last.id + 1;

    const newArray = todos.slice();
    newArray.push(todo);

    settodos(newArray);
  };
  return (
    <div className="App">
      <Header title={"d"} />
      <AddTodo newTodo={newTodo} />
      <UncompletedTodos todos={uncompletedTodos} onChanged={whenChecked} />
      <CompletedTodos todos={completedTodos} onChanged={whenChecked} />
    </div>
  );
}

export default App;
