import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div id="root">
      <h3>ToDo App using React and Mobx</h3>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
