import axios from 'axios';

const apiKey = import.meta.env.VITE_OMDB_API_KEY as string;
const apiUrl = import.meta.env.VITE_OMDB_BASE_URL as string;

export const fetchMovies = async (searchTerm: string, page: number = 1) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        s: searchTerm,
        page: page,
        apiKey: apiKey,
      },
    });
    return response.data;
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