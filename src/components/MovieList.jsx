import { MovieSummary } from "./MovieSummary";
import { useState } from "react";
const MovieList = (props) => {
  const { moviesArr: moviesToDisplay, deleteFunction } = props;

  return (
    <>
      {moviesToDisplay.map((movie, id) => {
        return (
          <MovieSummary
            key={movie.id}
            data={movie}
            idArr={id}
            deleteFunction={deleteFunction}
          />
        );
      })}
    </>
  );
};

export default MovieList;
