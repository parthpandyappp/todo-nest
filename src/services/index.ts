import axios from "axios";
import { TodoContent } from "../types";

export const getAllTodos = async () => {
  try {
    const res = await axios({
      url: "http://localhost:3001/todos/",
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    await axios({
      url: `http://localhost:3001/todos/${todoId}`,
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (todo: TodoContent) => {
  try {
    await axios({
      url: `http://localhost:3001/todos/${todo.id}`,
    });
  } catch (error) {
    console.log(error);
  }
};
