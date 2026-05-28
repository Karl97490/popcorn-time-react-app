import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./data/movies.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieID) => {
    // const newArr = moviesToDisplay.toSpliced(movieID, 1);
    // moviesToDisplay.splice(movieID, 1);
    const newArr = moviesToDisplay.filter((movie) => movie.id !== movieID);
    // setMoviesToDisplay(moviesToDisplay);
    setMoviesToDisplay(newArr);
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

        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<div>401</div>}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
