import "./Header.css";
const Header = ({ numberOfMovies }) => {
  return (
    <header className="Header">
      <h1>Welcome to PopCorn-Time!</h1>
      <h2>Numbers of movie: {numberOfMovies}</h2>
    </header>
  );
};

export default Header;
