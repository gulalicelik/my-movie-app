import type React from 'react';
import { useState, useEffect } from 'react';
import { getMovies, setPage, setYear, setType } from './movieSlice';
import type { RootState } from '../../app/store';
import type { SelectChangeEvent
} from "@mui/material";
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
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@mui/material"
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const MoviesList = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies.movies);
  const page = useAppSelector((state: RootState) => state.movies.page);
  const totalResults = useAppSelector((state: RootState) => state.movies.totalResults);
  const year = useAppSelector((state: RootState) => state.movies.year);
  const type = useAppSelector((state: RootState) => state.movies.type);
  const [searchTerm, setSearchTerm] = useState('Pokemon');

  useEffect(() => {
    dispatch(getMovies(searchTerm));
  }, [dispatch, searchTerm, page, year, type]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  const handleYearChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(setYear(event.target.value as string));
  };

  const handleTypeChange = (event: SelectChangeEvent<unknown>):any => {
    dispatch(setType(event.target.value as string));
  };

  const totalPages = Math.ceil(totalResults / 10); // 10 filmlik sayfa sayısı

  // @ts-ignore
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
        <Box my={2} display="flex" justifyContent="space-between">
          <FormControl variant="outlined">
            <InputLabel>Year</InputLabel>
            <Select
              value={year}
              onChange={handleYearChange}
              label="Year"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {Array.from(new Array(50), (x, i) => 2023 - i).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={handleTypeChange}
              label="Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">TV Series</MenuItem>
              <MenuItem value="episode">TV Episode</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
            count={totalPages}
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