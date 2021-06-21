import { LoginData, UserData } from "../types/userData";

export const defaultUserData: UserData = {
  User: {
    ClientRoles: [""],
    FullName: "",
    Id: "",
    UserName: "",
  },
  AuthorizationToken: {
    TokenExpires: "",
    Token: "",
  },
};

export const defaultLoginData: LoginData = {
  Password: "",
  Username: "",
};
