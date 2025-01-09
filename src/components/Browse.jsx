import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // fetching the Movies and Updating the Store
  useNowPlayingMovies();

  // fetching the Movies and Updating the Store
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      
      MainContainer
       - VideoBackgound
       - VideoTitle
      SecondaryContainer
       - MovieList * n
         - cards * n 
      
      
      
      */}
    </div>
  );
};

export default Browse;
