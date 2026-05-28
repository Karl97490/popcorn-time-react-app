import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const MovieDetails = ({ moviesArr }) => {
  const { movieId } = useParams();

  const movie = moviesArr.find((movie) => {
    if (movie.id === parseInt(movieId)) {
      return true;
    }
  });

  return (
    <div>
      <h3>{movie.title}</h3>
      {movie.imgURL && <img src={movie.imgURL} alt="Movie Picture" />}
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Genres: {movie.genres.join(" / ")}</p>
      <Link to={"/"}>Back</Link>
    </div>
  );
};
