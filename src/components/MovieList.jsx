import movies from "../data/movies.json";
import { MovieSummary } from "./MovieSummary";
import { useState } from "react";
const MovieList = () => {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const deleteMovie = (movieID) => {
    const newArr = moviesToDisplay.toSpliced(movieID, 1)
    // const newArr = moviesToDisplay.filter(
    //   (movie) => movie.id !== movieID,
    // );
    setMoviesToDisplay(newArr)
  };
  return (
    <>
      <h2>Numbers of movie: {moviesToDisplay.length}</h2>
      {moviesToDisplay.map((movie, id) => {
        return (
          <MovieSummary
            key={movie.id}
            data={movie}
            idArr={id}
            deleteFunction={deleteMovie}
          />
        );
      })}
    </>
  );
};

export default MovieList;
