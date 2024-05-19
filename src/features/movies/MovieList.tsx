import { useState, useEffect } from 'react';
import { getMovies, setPage } from './movieSlice';
import type { RootState } from '../../app/store';
import {
  Box,
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const MoviesList = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies.movies);
  const page = useAppSelector((state: RootState) => state.movies.page);
  const [searchTerm, setSearchTerm] = useState('Pokemon');

  useEffect(() => {
    dispatch(getMovies(searchTerm));
  }, [dispatch, searchTerm, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Movies List
        </Typography>
        <TextField
          label="Search for movies"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          margin="normal"
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>IMDb ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies?.map((movie: any) => (
                <TableRow key={movie.imdbID}>
                  <TableCell>
                    <Link to={`/movie/${movie.imdbID}`}>
                      {movie.Title}
                    </Link>
                  </TableCell>
                  <TableCell>{movie.Year}</TableCell>
                  <TableCell>{movie.imdbID}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box my={2} display="flex" justifyContent="center">
          <Pagination
            count={10} // Sayfa sayısını dinamik hale getirebilirsiniz
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MoviesList;