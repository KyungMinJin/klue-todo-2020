import React from "react";

import { TodoData } from "../models/todo";
import { todoStore } from "../store/todo";

interface Props {
  data: TodoData;
}

export const TodoItem = ({ data }: Props) => {
  const { todo } = todoStore();

  const removeItem = () => {
    todo.removeTodo(data.id);
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{data.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  );
};
