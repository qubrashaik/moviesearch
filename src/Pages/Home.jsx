import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "../CSS/Home.css";
import { searchMovie } from "../Services/API";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadDefault = async () => {
      try {
        setLoading(true);
        const data = await searchMovie("avengers");
        setMovies(data);
      } catch {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadDefault();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    try {
      setLoading(true);
      const results = await searchMovie(searchText);
      setMovies(results);
      setError(null);
    } catch {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-Form">
        <input
          className="search-box"
          type="text"
          placeholder="Enter Movie Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button">Search</button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}

      <div className="container">
        {!loading && movies.length === 0 && <p>No movies found</p>}

        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
