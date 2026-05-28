import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./data/movies.json";
import { useState } from "react";
function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieID) => {
    const newArr = moviesToDisplay.toSpliced(movieID, 1);
    // const newArr = moviesToDisplay.filter(
    //   (movie) => movie.id !== movieID,
    // );
    setMoviesToDisplay(newArr);
  };
  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesArr={moviesToDisplay} deleteFunction={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
