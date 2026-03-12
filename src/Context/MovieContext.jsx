import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      setFav(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav));
  }, [fav]);

  const isfav = (id) => {
    return fav.some((movie) => movie.imdbID === id);
  };

  const add = (movie) => {
    setFav((prev) => {
      if (prev.some((m) => m.imdbID === movie.imdbID)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const remove = (id) => {
    setFav((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  return (
    <MovieContext.Provider value={{ fav, add, remove, isfav }}>
      {children}
    </MovieContext.Provider>
  );
};
