import axios from "axios";
import { TodoContent } from "../types";

export const getAllTodos = async () => {
  try {
    const res = await axios({
      url: "http://localhost:3001/todos/",
      method: "GET",
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    console.log(todoId);
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
      url: `http://localhost:3001/todos/${todo._id}`,
      method: "PUT",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (todo: TodoContent) => {
  try {
    await axios({
      url: `http://localhost:3001/todos/`,
      method: "POST",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};
