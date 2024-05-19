# My Movie App

My Movie App is a Single Page Application (SPA) built with React and Redux. It allows users to search, filter, and view details of movies, TV series, and TV episodes using the OMDb API.

## Demo

Check out the live demo of the application [here](#).

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


