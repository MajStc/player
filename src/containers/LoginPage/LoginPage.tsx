import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import agent from "../../agent/agent";
import { setUserData } from "../../store/user/userSlice";
import { defaultLoginData } from "../../utils/Defaults/userData";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [loginData, setLoginData] = useState(defaultLoginData);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    []
  );

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    agent.Auth.login(loginData)
      .then((res) => {
        dispatch(setUserData(res.data));
        history.push("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.loginPageContainer}>
      <label className={styles.inputContainer}>
        <span>Username:</span>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          onChange={handleInputChange}
          value={loginData.Username}
        />
      </label>
      <label className={styles.inputContainer}>
        <span>Password:</span>
        <input
          type="text"
          placeholder="Password"
          name="Password"
          onChange={handleInputChange}
          value={loginData.Password}
        />
      </label>

      <button className={styles.loginButton} onClick={handleLogin}>
        LogIn
      </button>
    </div>
  );
};

export default LoginPage;
