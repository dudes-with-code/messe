import { createContext } from "react";
import UserType from "../../types/apiTypes";
import { NewUser } from "../user/user";

export const UserContext = createContext({
  user: NewUser,
  setUser: (user: any) => {},
});
