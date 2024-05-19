import moviesReducer, { setPage, setYear, setType } from '../features/movies/movieSlice';

const initialState:any = {
  movies: [],
  status: 'idle',
  error: null,
  movieDetails: null,
  page: 1,
  totalResults: 0,
  year: '',
  type: '',
};

describe('moviesSlice', () => {
  test('should handle initial state', () => {
    expect(moviesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle setPage', () => {
    const actual = moviesReducer(initialState, setPage(2));
    expect(actual.page).toEqual(2);
  });

  test('should handle setYear', () => {
    const actual = moviesReducer(initialState, setYear('2020'));
    expect(actual.year).toEqual('2020');
  });

  test('should handle setType', () => {
    const actual = moviesReducer(initialState, setType('movie'));
    expect(actual.type).toEqual('movie');
  });
});