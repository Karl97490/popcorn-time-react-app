import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = ({ numberOfMovies }) => {
  return (
    <div className="Header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Add new movie</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <header>
        <h1>Welcome to PopCorn-Time!</h1>
        <h2>Numbers of movie: {numberOfMovies}</h2>
      </header>
    </div>
  );
};

export default Header;
