import { atom } from "recoil";

export const bgColorState = atom<string>({
  key: "bgcolor",
  default: "#ffffff",
});
