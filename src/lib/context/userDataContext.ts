import { createContext } from "react";
import { NewUser } from "../user/user";

export const UserContext = createContext({
  user: NewUser,
  setUser: (user: any) => {},
});
