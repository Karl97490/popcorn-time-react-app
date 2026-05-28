import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export const MovieSummary = (props) => {
  const { data: movie, deleteFunction: deleteMovie } = props;
  return (
    <div className="card">
      <h3>{movie.title}</h3>

      {movie.imgURL && <img src={movie.imgURL} alt="Movie Picture" />}

      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
      {/* <button onClick={() => deleteMovie(idArr)}>Delete</button> */}
      <NavLink to={`/movies/${movie.id}`} >
        <button name="details">Details</button>
      </NavLink>
    </div>
  );
};
