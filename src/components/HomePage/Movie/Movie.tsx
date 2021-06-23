import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import agent from "../../../agent/agent";
import { RootState } from "../../../store/store";
import { ERROR, VIDEO_PLAYER } from "../../../utils/routes";
import SplashScreen from "../../shared/SplashScreen/SplashScreen";

import styles from "./Movie.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
  MediaId: number;
  StreamType: string;
}

const Movie = ({ title, description, image, MediaId, StreamType }: Props) => {
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: RootState) => state.login);
  const history = useHistory();

  const handleClick = () => {
    setLoading(true);
    data.User.UserName === "Anonymous"
      ? (StreamType = "TRIAL")
      : (StreamType = "MAIN");

    agent.Video.getSingleVideo({ MediaId, StreamType })
      .then((res) => {
        setLoading(false);
        history.push(VIDEO_PLAYER, { ContentUrl: res.data.ContentUrl });
      })
      .catch(() => history.push(ERROR));
  };

  return (
    <div className={styles.movieContainer} onClick={handleClick}>
      {loading && <SplashScreen />}
      <p className={styles.title}>{title}</p>
      <img alt="frame" src={image} />
      <p>{description}</p>
    </div>
  );
};

export default Movie;
