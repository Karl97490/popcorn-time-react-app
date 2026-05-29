import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./data/movies.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { MovieDetails } from "./components/MovieDetails";
import { AddMovie } from "./components/AddMovie";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieID) => {
    // const newArr = moviesToDisplay.toSpliced(movieID, 1);
    // moviesToDisplay.splice(movieID, 1);
    // setMoviesToDisplay(moviesToDisplay);
    const newArr = moviesToDisplay.filter((movie) => movie.id !== movieID);
    setMoviesToDisplay(newArr);
  };

  const createMovie = (newMovie) => {
    const newId = Math.max(...moviesToDisplay.map((movie) => movie.id)) + 1;

    newMovie = {
      ...newMovie,
      id: newId,
    };

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              moviesArr={moviesToDisplay}
              deleteFunction={deleteMovie}
            />
          }
        />

        <Route
          path="/movies/:movieId"
          element={<MovieDetails moviesArr={moviesToDisplay} />}
        />

        <Route path="/create" element={<AddMovie onCreate={createMovie} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<div>401</div>}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
