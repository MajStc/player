import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      <LoadingSpinner />
    </div>
  );
};

export default SplashScreen;
