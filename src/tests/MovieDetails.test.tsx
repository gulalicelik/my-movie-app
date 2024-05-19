import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from '../features/movies/MovieDetail';

describe('MovieDetails', () => {
  test('renders loading message', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/movie/tt1234567']}>
          <Routes>
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});