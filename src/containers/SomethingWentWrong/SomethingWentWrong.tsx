import React from "react";

import styles from "./SomethingWentWrong.module.css";

import { useHistory } from "react-router";
import { HOME } from "../../utils/routes";

const SomethingWentWrong = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(HOME);
  };

  return (
    <div className={styles.errorContainer}>
      Ooops... something went wrong...
      <div className={styles.goBack} onClick={goBack}>
        Go back to HomePage
      </div>
    </div>
  );
};

export default SomethingWentWrong;
