import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './movieSlice';
import type { RootState } from '../../app/store';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const MovieDetails = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state: RootState) => state.movies.movieDetails);

  useEffect(() => {
    dispatch(getMovieDetails(imdbID ?? ''));
  }, [dispatch, imdbID]);

  return (
    <Container>
      {movie ? (
        <Box my={4}>
          <Paper>
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    {movie.Title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Duration: {movie.Title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Genre: {movie.Type}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Cast: {movie.Year}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    IMDb Rating: {movie.imdbID}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      ) : (
        <Typography variant="h6" component="p">
          Loading...
        </Typography>
      )}
    </Container>
  );
};

export default MovieDetails;