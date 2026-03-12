import React from "react";
import "../CSS/Favourites.css";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

const Favourites = () => {
  const { fav } = useMovieContext();

  return (
    <div className="container">
      {fav.length === 0 ? (
        <div className="favourites">
          <h2>No Favourites Yet!</h2>
        </div>
      ) : (
        fav.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      )}
    </div>
  );
};

export default Favourites;
