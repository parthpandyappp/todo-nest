import { atom } from "recoil";
import { TodoContent } from "../types";

export const todoState = atom<TodoContent[]>({
  key: "todoContents",
  default: [],
});
