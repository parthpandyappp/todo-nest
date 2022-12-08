import { TodoItem } from "./TodoItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState, changeDetected } from "../states";
import { useEffect } from "react";
import { getAllTodos } from "../services";
import { TodoContent } from "../types";

export function TodoList() {
  const todos = useRecoilValue<TodoContent | any>(todoState);
  const detectedChanges = useRecoilValue<boolean>(changeDetected);
  const setTodos = useSetRecoilState<TodoContent[] | any>(todoState);

  useEffect(() => {
    (async () => {
      const res = await getAllTodos();
      setTodos(res);
    })();
  }, [detectedChanges]);

  console.log("TODOS FROM LIST: ", todos);
  console.log("DETECTION: ", detectedChanges);
  return (
    <div>
      {todos?.map((todo: TodoContent) => (
        <TodoItem {...todo} key={todo._id} />
      ))}
    </div>
  );
}
