import movies from "../data/movies.json";
import { useState } from "react";
const MovieList = () => {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const deleteMovie = (movieID) => {
    // moviesToDisplay.splice(movieID, 1)
    // setMoviesToDisplay([...moviesToDisplay])
    const filtMoviesArr = moviesToDisplay.filter(
      (movie) => movie.id !== movieID,
    );
    setMoviesToDisplay(filtMoviesArr);
  };
  return (
    <>
      {moviesToDisplay.map((movie, id) => {
        return (
          <div key={movie.id} className="card">
            <h3>{movie.title}</h3>

            {movie.imgURL && <img src={movie.imgURL} alt="Movie Picture" />}

            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
            {/* <button onClick={() => deleteMovie(id)}>Delete</button> */}
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
