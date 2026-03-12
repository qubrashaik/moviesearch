import React from "react";
import "../CSS/MovieCard.css";
import { useMovieContext } from "../Context/MovieContext";

const MovieCard = ({ movie }) => {
  const { isfav, add, remove } = useMovieContext();
  const favourite = isfav(movie.imdbID);

  const onFavClick = (e) => {
    e.preventDefault();
    favourite ? remove(movie.imdbID) : add(movie);
  };

  return (
    <div className="movie_card">
      <div className="movie_poster">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />

        <button
          className={`fav_btn ${favourite ? "active" : ""}`}
          onClick={onFavClick}
        >
          ♥
        </button>
      </div>

      <div className="movie_details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
