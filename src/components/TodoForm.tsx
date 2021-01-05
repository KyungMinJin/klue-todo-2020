import { useObserver } from "mobx-react";
import React, { useState } from "react";
import { todoStore } from "../store/todo";

const TodoForm = () => {
  const { todo } = todoStore();
  const [content, setContent] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todo.addTodo(content);
    setContent("");
  };

  const onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setContent(e.target.value);
  };

  return useObserver(() => (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChangeContent}
        value={content}
        placeholder="내용"
      />
      <button type="submit">입력</button>
    </form>
  ));
};

export default TodoForm;
