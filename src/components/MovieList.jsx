import movies from "../data/movies.json";
const MovieList = () => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="card">
            <h3>{movie.title}</h3>

            {movie.imgURL 
            && <img src={movie.imgURL} alt="Movie Picture" />}

            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
