import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import MoviesList from '../features/movies/MovieList';
import userEvent from '@testing-library/user-event';
import { store } from "../app/store"

describe('MoviesList', () => {
  test('renders Movies List heading', () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    const headingElement = screen.getByText(/Movies List/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders search input',  () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/Search for movies/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('handles search input change', async () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/Search for movies/i);
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'Batman');
    expect(inputElement).toHaveValue('Batman');
  });
});