import { atom } from "recoil";
import { TodoContent } from "../types";

export const todoState = atom<TodoContent[]>({
  key: "todoContents",
  default: [],
});

export const changeDetected = atom<boolean>({
  key: "renderAction",
  default: false,
});
