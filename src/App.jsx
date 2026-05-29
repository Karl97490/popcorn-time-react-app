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
  const [title, setTitle] = useState("");

  const deleteMovie = (movieID) => {
    // const newArr = moviesToDisplay.toSpliced(movieID, 1);
    // moviesToDisplay.splice(movieID, 1);
    // setMoviesToDisplay(moviesToDisplay);
    const newArr = moviesToDisplay.filter((movie) => movie.id !== movieID);
    setMoviesToDisplay(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: title,
      year: 1999,
      rating: 10,
    };
    const newList = [newMovie, ...moviesToDisplay];
    console.log(newList)
    setMoviesToDisplay(newList);
    setTitle("")
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section onSubmit={handleSubmit}>
        <form action="">
          <input
            value={title}
            type="text"
            name="title"
            placeholder="The Godfather"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button>Create movie</button>
        </form>
      </section>

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

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<div>401</div>}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
