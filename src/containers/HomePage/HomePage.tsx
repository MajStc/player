import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import agent from "../../agent/agent";
import Movie from "../../components/HomePage/Movie/Movie";
import SplashScreen from "../../components/shared/SplashScreen/SplashScreen";
import { defaultFetchVideosData } from "../../utils/Defaults/videoData";
import { ERROR } from "../../utils/routes";
import { Video } from "../../utils/types/videoData";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    agent.Video.getAllVideos(defaultFetchVideosData)
      .then(({ data }) => {
        setMovies([...data.Entities]);
        setLoading(false);
      })
      .catch(() => history.push(ERROR));
  }, [history]);

  if (loading || !movies) return <SplashScreen />;

  return (
    <div className={styles.mainContainer}>
      {movies.map((movie) => (
        <Movie
          key={movie.Title}
          title={movie.Title}
          description={movie.Description}
          // @ts-ignore
          image={
            movie.Images.find((image) => image.ImageTypeCode === "FRAME")?.Url
          }
          MediaId={+movie.Id}
          StreamType={movie.MediaTypeCode}
        />
      ))}
    </div>
  );
};

export default HomePage;
