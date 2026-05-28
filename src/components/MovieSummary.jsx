export const MovieSummary = (props) => {
  const { data: movie, deleteFunction: deleteMovie, idArr } = props;
  return (
    <div className="card">
      <h3>{movie.title}</h3>

      {movie.imgURL && <img src={movie.imgURL} alt="Movie Picture" />}

      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      {/* <button onClick={() => deleteFunction(movie.id)}>Delete</button> */}
      <button onClick={() => deleteMovie(idArr)}>Delete</button>
    </div>
  );
};
