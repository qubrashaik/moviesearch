const API_KEY = "4c32b4fd";
const BASE_URL = "https://www.omdbapi.com/";


export const searchMovie = async (query, maxPages = 5) => {
  try {
    let allMovies = [];

    for (let page = 1; page <= maxPages; page++) {
      const response = await fetch(
        `${BASE_URL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${API_KEY}`,
      );

      const data = await response.json();

      if (data.Response === "True") {
        allMovies = [...allMovies, ...data.Search];
      } else {
        break; 
      }
    }

    return allMovies;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};


export const getPopular = async (imdbID) => {
  try {
    const response = await fetch(
      `${BASE_URL}?i=${imdbID}&plot=full&apikey=${API_KEY}`,
    );
    const data = await response.json();

    return data.Response === "True" ? data : null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
