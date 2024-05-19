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
  totalResults: number;
  year: string;
  type: string;
}

const initialState: MovieState = {
  movies: [],
  status: 'idle',
  error: null,
  movieDetails: null,
  page: 1,
  totalResults: 0,
  year: '',
  type: '',
};

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (searchTerm: string, { getState }) => {
    const state = getState() as RootState;
    const { page, year, type } = state.movies;
    const response = await fetchMovies(searchTerm, page, year, type);
    return response;
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
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
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

export const { setPage, setYear, setType } = moviesSlice.actions;

export default moviesSlice.reducer;