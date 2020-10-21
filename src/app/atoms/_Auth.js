import { atom } from "recoil";

export const OAuth = atom({ // OAuth object
  key: "OAuth",
  default: {
    name: "Hello"
  },
});

export const isLogin = atom({ // Login state
  key: "isLogin",
  default: false,
});
