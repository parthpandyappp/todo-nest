import { TodoContent } from "../types";
import { createTodo } from "../services";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { changeDetected } from "../states";

const TodoCreate = () => {
  const initVals = { todo: "", isCompleted: false };
  const [formData, setFormData] = useState<TodoContent>(initVals);

  const setChangeDetection = useSetRecoilState<boolean>(changeDetected);

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo(formData);
    setChangeDetection((prev) => !prev);
  };

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="todo">Your Task</label>
      <input
        type="text"
        onChange={(e) => setFormData({ ...formData, todo: e.target.value })}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export { TodoCreate };
