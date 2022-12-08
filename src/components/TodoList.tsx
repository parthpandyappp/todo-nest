import { TodoItem } from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoState } from "../states";

export function TodoList() {
  const todos = useRecoilValue(todoState);
  console.log("TODOS FROM LIST: ", todos);
  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
}
