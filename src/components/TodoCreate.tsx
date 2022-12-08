import { useState } from "react";
import { todoState } from "../states";
import { TodoContent } from "../types";
import uuid from "react-uuid";
import { useSetRecoilState } from "recoil";

const TodoCreate = () => {
  const setTodos = useSetRecoilState(todoState);
  const initVals = { id: "", todo: "", isCompleted: false };
  const [formData, setFormData] = useState<TodoContent>(initVals);
  //   console.log(formData);

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodos((todos) => [...todos, { ...formData, id: uuid() }]);
  };

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="todo">Your Task</label>
      <input
        type="text"
        onChange={(e) => setFormData({ ...formData, todo: e.target.value })}
      />
      <input
        type="checkbox"
        onChange={() =>
          setFormData({ ...formData, isCompleted: !formData.isCompleted })
        }
        checked={formData.isCompleted}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export { TodoCreate };
