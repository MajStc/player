import React, { useEffect } from "react";

import styles from "HomePage.module.css";
import { useReducer } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const HomePage = () => {
  const data = useSelector((state: RootState) => state.login);

  useEffect(() => {
    console.log(data);
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
