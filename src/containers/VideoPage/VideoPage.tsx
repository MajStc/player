import React, { useEffect, useRef } from "react";
import ReactHlsPlayer from "react-hls-player";
import { useHistory, useLocation } from "react-router-dom";
import { ERROR } from "../../utils/routes";
import { TParams } from "../../utils/types/parama";
import styles from "./VideoPage.module.css";

const VideoPage = () => {
  const playerRef = useRef(null);
  const location = useLocation<TParams>();
  const { ContentUrl } = location.state;
  const history = useHistory();

  useEffect(() => {
    if (!ContentUrl) {
      history.push(ERROR);
    }
  }, [ContentUrl, history]);

  return (
    <div className={styles.videoContainer}>
      <ReactHlsPlayer
        src={ContentUrl}
        playerRef={playerRef}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default VideoPage;
