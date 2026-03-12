import { useEffect, useState } from "react";
import { getPopular } from "../Services/API";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopular();
      console.log("Movies to render:", data); // check here too
      setMovies(data);
    };
    fetchMovies();
  }, []);

  if (!movies.length) return <p>Loading movies...</p>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title || movie.name}</h2>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}
