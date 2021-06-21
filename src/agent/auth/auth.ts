import { defaultLoginData } from "../../utils/Defaults/userData";
import { LoginData, UserData } from "../../utils/types/userData";
import { request } from "../agent";

const Auth = {
  login: (loginData: LoginData = defaultLoginData) =>
    request.post<UserData>("/Authorization/SignIn", loginData),
};

export default Auth;
