import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import agent from "../../agent/agent";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import { setUserData } from "../../store/user/userSlice";
import { defaultLoginData } from "../../utils/Defaults/userData";
import { HOME } from "../../utils/routes";

import bsg from "../../assets/images/bsg.png";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [loginData, setLoginData] = useState(defaultLoginData);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    agent.Auth.login(loginData)
      .then((res) => {
        dispatch(setUserData(res.data));
        setLoading(false);
        history.push(HOME);
      })
      .catch(console.error);
  };

  return (
    <div className={styles.loginPageContainer}>
      <p className={styles.logo}>
        <img alt="bsg" src={bsg} />
      </p>
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
        {loading ? <LoadingSpinner /> : "LogIn"}
      </button>
    </div>
  );
};

export default LoginPage;
