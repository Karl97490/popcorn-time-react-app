import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddMovie = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: title,
      year: year,
      rating: rating,
    };

    onCreate(newMovie);

    navigate("/");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input
            value={title}
            type="text"
            name="title"
            placeholder="The Godfather"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Year
          <input
            value={year}
            type="number"
            name="year"
            placeholder="1999"
            required={true}
            min={1950}
            max={2050}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>
        <label>
          Rating
          <input
            value={rating}
            type="number"
            min={0}
            max={10}
            name="rating"
            placeholder="10"
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>

        <button>Create movie</button>
      </form>
    </section>
  );
};
