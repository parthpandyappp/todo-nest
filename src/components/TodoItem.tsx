import { TodoContent } from "../types";
import { deleteTodo, updateTodo } from "../services";
import { todoState, changeDetected } from "../states";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function TodoItem(props: TodoContent) {
  const { _id, isCompleted, todo } = props;
  const todos = useRecoilValue<TodoContent | any>(todoState);
  const setChangeDetection = useSetRecoilState<boolean>(changeDetected);

  const deleteATodo = async (todoId: string) => {
    await deleteTodo(todoId);
    setChangeDetection((prev) => !prev);
  };

  const toggleTodoCompletion = async (todoId: string) => {
    const dataToBePosted = todos.find(
      (todo: TodoContent) => todo._id === todoId
    );
    await updateTodo({
      ...dataToBePosted,
      isCompleted: !dataToBePosted.isCompleted,
    });
    setChangeDetection((prev) => !prev);
  };

  const todoStyle = {
    textDecoration: isCompleted ? "line-through" : "",
  };

  return (
    <div>
      <li>
        <span style={todoStyle}>{todo}</span>
        <span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleTodoCompletion(_id!)}
          />
          <button onClick={() => deleteATodo(_id!)}>delete</button>
        </span>
      </li>
    </div>
  );
}
