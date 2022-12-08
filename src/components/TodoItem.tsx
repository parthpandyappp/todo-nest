import { useSetRecoilState } from "recoil";
import { todoState } from "../states";
import { TodoContent } from "../types";
export function TodoItem(props: TodoContent) {
  const { id, isCompleted, todo } = props;
  const setTodos = useSetRecoilState(todoState);

  const deleteTodo = (todoId: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompletion = (todoId: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <li>
        {todo}
        <span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleTodoCompletion(id)}
          />
          <button onClick={() => deleteTodo(id)}>delete</button>
        </span>
      </li>
    </div>
  );
}
