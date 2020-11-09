import { atom } from "recoil";

export const UserObjAtom = atom({
  key: "UserObjAtom",
  default: null,
});

export const IsAdminAtom = atom({
  key: "IsAdminAtom",
  default: false,
});
