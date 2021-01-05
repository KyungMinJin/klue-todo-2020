import React from "react";
import { useObserver } from "mobx-react";
import { TodoItem } from "./TodoItem";
import { todoStore } from "../store/todo";

const TodoList = () => {
  const {
    todo: { todoData },
  } = todoStore();

  return useObserver(() => (
    <section>
      {todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  ));
};

export default TodoList;
