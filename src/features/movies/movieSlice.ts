import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetails } from '../../utils/omdbAPI';
import type { RootState } from '../../app/store';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  movieDetails: Movie | null;
  page: number;
}

const initialState: MovieState = {
  movies: [],
  status: 'idle',
  error: null,
  movieDetails: null,
  page: 1,
};

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (searchTerm: string, { getState }) => {
    const state = getState() as RootState;
    const page = state.movies.page;
    const response = await fetchMovies(searchTerm, page);
    return response.Search;
  }
);

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetails',
  async (imdbID: string) => {
    const response = await fetchMovieDetails(imdbID);
    return response;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(getMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export const { setPage } = moviesSlice.actions;

export default moviesSlice.reducer;