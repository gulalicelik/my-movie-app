import axios from "axios"

const apiKey = import.meta.env.VITE_OMDB_API_KEY
const apiUrl = import.meta.env.VITE_OMDB_API_URL

export const fetchMovies = async (searchTerm: string, page: number = 1, year?: string, type?: string) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        s: searchTerm,
        page: page,
        y: year,
        type: type,
        apiKey: apiKey,
      },
    });
    return {
      movies: response.data.Search,
      totalResults: response.data.totalResults,
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (imdbID: string) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        i: imdbID,
        apiKey: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};