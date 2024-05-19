# My Movie App

My Movie App is a Single Page Application (SPA) built with React and Redux. It allows users to search, filter, and view details of movies, TV series, and TV episodes using the OMDb API.

## Demo

Check out the live demo of the application [here](https://my-movie-app-invent.netlify.app/).

## Features

- Search for movies, TV series, and TV episodes.
- Filter results by year and type (movie, series, episode).
- Pagination for browsing through results.
- View detailed information about a specific movie, TV series, or episode.

## Technologies Used

- React
- Redux
- Material UI
- Axios
- OMDb API

## Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

Make sure you have npm and Node.js installed on your machine.

### Installation Steps

1. Clone the repo
   ```sh
   git clone https://github.com/gulalicelik/my-movie-app.git
   ```
2. Navigate to the project directory
   ```sh
   cd my-movie-app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your OMDb API key (already included for this project)
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   VITE_OMDB_API_URL=http://www.omdbapi.com/
   ```

## Usage

To start the development server, run:

```sh
npm start
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Testing

This project uses Vitest and React Testing Library for unit and integration tests. Below are the steps to run the tests and details on the test structure.

### Running Tests

To run the tests, use the following command:

```sh
npm test
```

This command will execute all the test cases and provide a detailed report of the results.

### Test Structure

The tests are located in the `src/tests` directory and follow the structure of the application. Each component and Redux slice has corresponding test files to ensure comprehensive test coverage.

#### Example Test Files

- **Component Tests**: These tests verify the functionality and rendering of React components.
   - `MoviesList.test.tsx`
   - `MovieDetails.test.tsx`

- **Redux Slice Tests**: These tests check the Redux slice actions and reducers.
   - `moviesSlice.test.ts`

#### Test Utilities

- **setupTests.ts**: This file sets up the test environment and configurations for Jest and Testing Library.

  ```typescript
  import '@testing-library/jest-dom';
  ```

#### Sample Test Case

Below is an example of a test case for the `MoviesList` component:

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import MoviesList from './MoviesList';
import userEvent from '@testing-library/user-event';

describe('MoviesList', () => {
  test('renders search input', () => {
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
```

### Adding New Tests

To add new tests, create a new file in the `src/tests` directory following the naming convention of the component or slice being tested. Write test cases using Jest and React Testing Library to cover various scenarios and edge cases.

For example, to add tests for a new component `NewComponent`, create a file named `NewComponent.test.tsx` in the `src/tests` directory.

### Test Coverage

Ensure that your tests cover all critical functionalities and edge cases to maintain the quality and reliability of the application.

For any questions or issues regarding tests, please refer to the [Vitest documentation](https://vitest.dev/guide/) and [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/).

## Folder Structure

The project structure is as follows:

```
my-movie-app/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── createAppSlice.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── features/
│   │   ├── movies/
│   │   │   ├── moviesSlice.ts
│   │   │   ├── MoviesList.tsx
│   │   │   └── MovieDetails.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── omdbApi.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Gülali Çelik

Project Link: [https://github.com/gulalicelik/my-movie-app](https://github.com/gulalicelik/my-movie-app)


