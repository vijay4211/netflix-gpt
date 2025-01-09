import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgound from "./VideoBackgound";

const MainContainer = () => {
  // get the movies from store using useSelector
  // Optinal Chaining avoid the null data so we use "?" mark
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   console.log("movies------", movies);

  if (!movies) return;

  const mainMovie = movies[0];
  //   console.log("mainMovie-------", mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgound movieId={id} />
    </div>
  );
};

export default MainContainer;
