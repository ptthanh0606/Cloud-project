import { atom } from "recoil";

export const UserObj = atom({
  key: "UserObj",
  default: {
    name: "Hello",
  },
});
